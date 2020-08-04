import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class WorldStatsCharts extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const options = {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'My chart'
            },
           /*  plotOptions: {
                series: {
                    pointStart: [Date.UTC(2013,5,2),0.7695]
                }
            }, */
            series: [
                {   name: 'Data',
                    data: [[Date.UTC(2013,5,2),0.7695], 
                    [Date.UTC(2013,6,12),2.7695], 
                    [Date.UTC(2013,7,21),1.7695], 
                    [Date.UTC(2013,8,18),4]]
                    
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