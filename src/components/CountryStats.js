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
        fetch(`https://corona.lmao.ninja/v2/countries?yesterday&sort`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ countrydetails: data })
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
                value.country.toLowerCase().includes(searchInput.toLowerCase())
            );
        });
        this.setState({ filteredData });
    };

    render() {
        const flag = this.state.flag;
        const columns = [
            {
                Header: 'Country',
                accessor: 'country'
            }, {
                Header: 'Total Cases',
                accessor: 'cases'
            }, {
                Header: 'Total Recovered',
                accessor: 'recovered'
            }, {
                Header: 'Total Deaths',
                accessor: 'deaths'
            }, {
                Header: 'New Cases',
                accessor: 'todayCases'
            }, {
                Header: 'New Deaths',
                accessor: 'todayDeaths'
            }, {
                Header: 'Total Active Cases',
                accessor: 'active'
            }, {
                Header: 'Total Serious Cases',
                accessor: 'critical'
            }
        ]
        let table = null;
        if (flag) {
            table = <div >
                <input type='text' name="searchInput"
                    value={this.state.searchInput || ""}
                    onChange={this.handleChange}
                    label="Search" placeholder="Search By Country"/>
                {this.state.flag ? <ReactTable
                    data={this.state.filteredData && this.state.filteredData.length ? this.state.filteredData : this.state.countrydetails}
                    columns={columns}
                    defaultPageSize={this.state.currentPageSize}
                    pagination={true}
                /> : null}
            </div>;
        }

        return (
            <div style={css2PadDiv}>
                {/* <span>Click here</span><button onClick={this.Countrydata} >Stats</button> */}
                {table}
            </div>
        );
    }
}

const css2PadDiv = {
    padding: "2rem",
  };