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
        recovered: [],
    }

    componentDidMount() {
        this.countryInfo();
    }

    countryInfo = async () => {
        fetch('https://corona.lmao.ninja/v2/historical/india?lastdays=30')
            .then(res => res.json())
            .then((data) => {
                var xAxis = [];
                var arrTc = [];
                var arrTd = [];
                var recovered = [];
               /*  Object.keys(data.timeline.cases).forEach(function (k, v) {
                    xAxis.push(k);
                    arrTc.push(v)
                }); */
                xAxis = Object.keys(data.timeline.cases);
                arrTc = Object.values(data.timeline.cases);
                arrTd = Object.values(data.timeline.deaths);
                recovered = Object.values(data.timeline.recovered);
                this.setState({ xAxisData: xAxis })
                this.setState({ tcTimeline: arrTc })
                this.setState({ tdTimeline: arrTd })
                this.setState({ recovered: recovered })
                /* console.log(this.state.tcTimeline)
                console.log(this.state.tdTimeline) */
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
                text: 'Covid-19 India Data Chart'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    //pointStart: Date.UTC(2020, 4, 1)
                }
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
                    data: this.state.tdTimeline

                }
                ,
                {
                    name: 'Total Recovered',
                    data: this.state.recovered

                }
            ]
        };

        return (
            <div style={cssDiv}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        );
    }

}

const cssDiv = {
    padding: "3rem",
  };