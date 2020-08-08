import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class WorldStatsCharts extends Component {

    constructor(props) {
        super(props);
        this.countryInfo = this.countryInfo.bind(this);
    }

    state = {
        xAxisData: [],
        tcTimeline: [{}],
        tdTimeline: [],
        newCases: [],
    }

    componentDidMount() {
        this.countryInfo();
    }

    countryInfo = async () => {
        fetch('https://api.thevirustracker.com/free-api?countryTimeline=IN')
            .then(res => res.json())
            .then((data) => {
                var xAxis = [];
                var arrTc = [];
                var arrTd = [];
                var newCases = [];
                Object.keys(data.timelineitems[0]).forEach(function (k, v) {
                    xAxis.push(k);
                    arrTc.push(data.timelineitems[0][k].total_cases)
                    arrTd.push(data.timelineitems[0][k].total_deaths)
                    newCases.push(data.timelineitems[0][k].new_daily_cases)
                });
                this.setState({ xAxisData: xAxis })
                this.setState({ tcTimeline: arrTc })
                this.setState({ tdTimeline: arrTd })
                this.setState({ newCases: newCases })
                console.log(this.state.tcTimeline)
                console.log(this.state.tdTimeline)
            })
            .catch(console.log)
    }

    render() {
        //const { classes } = this.props
        const options = {
            chart: {
                type: 'areaspline',
                scrollablePlotArea: {
                    minWidth: 100
                }
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Covid-19 India Data'
            },
            xAxis: {
                categories: this.state.xAxisData
            },
            series: [
                {
                    name: 'Total Cases',
                    data: this.state.tcTimeline

                },
                {
                    name: 'Total deaths',
                    data: this.state.tcTimeline

                }
                ,
                {
                    name: 'New Cases',
                    data: this.state.newCases

                }
            ]
        };

        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        );
    }

}