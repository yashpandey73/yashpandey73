import React, { Component } from "react";
import WorldStatsCharts from "../components/WorldStatsCharts";

export default class HelperComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      global: Object,
      countries: [],
      totalCountries: Number,
      flag: false
    }
    this.info = this.info.bind(this);
  }

  componentDidMount() {
    this.info();
  }

  info = async () => {
    fetch('https://corona.lmao.ninja/v2/all?yesterday')
      .then(res => res.json())
      .then((data) => {

        this.setState({ global: data, flag: true });
      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <div>
          <Contacts global={this.state.global}  />
        </div>
        <div style={css2PadDiv}>
          <WorldStatsCharts data={this.state.global} />
        </div>
      </div>


    )
  }

}
export const Contacts = ({ global }) => {
  return (
    <div>
      <center><h1 className="alert alert-primary">Corona Virus Global Data</h1></center>
      <div className="card" style={cssDiv}>
        <div className="card-body">
          <div className="row form-group mb-2">
            <label className="col-md-4">Total Cases:</label>
            <div className="input-group col-md-8">
              <span >{global.cases}</span>
            </div>
          </div>
          <div className="row form-group mb-2">
            <label className="col-md-4">Total Affected Countries:</label>
            <div className="input-group col-md-8">
              <span >{global.affectedCountries}</span>
            </div>
          </div>
          <div className="row form-group mb-2">
            <label className="col-md-4">Recovery Cases:</label>
            <div className="input-group col-md-8">
              <span >{global.recovered}</span>
            </div>
          </div>
          <div className="row form-group mb-2">
            <label className="col-md-4">UnRecovered Cases:</label>
            <div className="input-group col-md-8">
              <span >{global.recovered - global.active}</span>
            </div>
          </div>
          <div className="row form-group mb-2">
            <label className="col-md-4">Total Deaths:</label>
            <div className="input-group col-md-8">
              <span >{global.deaths}</span>
            </div>
          </div>
          <div className="row form-group mb-2">
            <label className="col-md-4">Total Active Cases:</label>
            <div className="input-group col-md-8">
              <span >{global.active}</span>
            </div>
          </div>
          <div className="row form-group mb-2">
            <label className="col-md-4">Total New Cases Today:</label>
            <div className="input-group col-md-8">
              <span >{global.todayCases}</span>
            </div>
          </div>
          <div className="row form-group mb-2">
            <label className="col-md-4">Total New Deaths Today:</label>
            <div className="input-group col-md-8">
              <span >{global.todayDeaths}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const cssDiv = {
  padding: "1rem",
  paddingBottom: "2rem"
};

const css2PadDiv = {
  padding: "2rem",
};