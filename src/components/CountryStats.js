import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

export default class CountryStats extends Component {
    constructor(props) {
        super(props);
        this.val = "newval";
        this.Countrydata = this.Countrydata.bind(this);
    }

    state = {
        currentPageSize: 10,
        countrydetails: [],
        filteredData: [],
        searchInput: '',
        flag: false
    }

    Countrydata() {
        this.MakeHttpReq();
    }

    componentDidMount() {
        this.MakeHttpReq();
    }
    MakeHttpReq = async () =>  {
        fetch(`https://api.thevirustracker.com/free-api?countryTotals=ALL`)
            .then(res => res.json())
            .then((data) => {
                var arr = [];
                Object.keys(data.countryitems[0]).forEach(function (k, v) {
                    if (data.countryitems[0][v] !== undefined) {
                        arr.push(data.countryitems[0][v]);
                    }
                });
                this.setState({ countrydetails: arr })
                this.setState({ flag: true })
            })
            .catch(console.log)
    }

    handleChange = event => {
        this.setState({ searchInput: event.target.value }, () => {
            this.globalSearch();
        });
    };

    globalSearch = () => {
        let { searchInput, countrydetails } = this.state;
        let filteredData = countrydetails.filter(value => {
            return (
                value.title.toLowerCase().includes(searchInput.toLowerCase())
            );
        });
        this.setState({ filteredData });
    };

    render() {
        const flag = this.state.flag;
        const columns = [
            {
                Header: 'Country',
                accessor: 'title'
            }, {
                Header: 'Total Cases',
                accessor: 'total_cases'
            }, {
                Header: 'Total Recovered',
                accessor: 'total_recovered'
            }, {
                Header: 'Total Deaths',
                accessor: 'total_deaths'
            }, {
                Header: 'New Cases',
                accessor: 'total_new_cases_today'
            }, {
                Header: 'New Deaths',
                accessor: 'total_new_deaths_today'
            }, {
                Header: 'Total Active Cases',
                accessor: 'total_active_cases'
            }, {
                Header: 'Total Serious Cases',
                accessor: 'total_serious_cases'
            }
        ]
        let table = null;
        if (flag) {
            table = <div >
                <input type='text' name="searchInput"
                    value={this.state.searchInput || ""}
                    onChange={this.handleChange}
                    label="Search" />
                {this.state.flag ? <ReactTable
                    data={this.state.filteredData && this.state.filteredData.length ? this.state.filteredData : this.state.countrydetails}
                    columns={columns}
                    defaultPageSize={this.state.currentPageSize}
                    pagination={true}
                /> : null}
            </div>;
        }

        return (
            <div className="text-left">
                <span>Click here</span><button onClick={this.Countrydata} >Stats</button>
                {table}
            </div>
        );
    }
}