import React, { Component } from "react";
import WorldStatsCharts from "../components/WorldStatsCharts";

export default class HelperComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details: Object,
      flag: false
    }
    this.info = this.info.bind(this);
  }

  componentDidMount() {
    this.info();
  }

  info = async () => {
    fetch('https://api.thevirustracker.com/free-api?global=stats')
      .then(res => res.json())
      .then((data) => {
        this.setState({ details: data.results[0], flag: true })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <div>
          <Contacts details={this.state.details} />
        </div>
        <div>
          <WorldStatsCharts data={this.state.details} />
        </div>
      </div>


    )
  }

}
export const Contacts = ({ details }) => {
  return (
    <div>
      <center><h1 className="alert alert-primary">Corona Virus Global Updated List</h1></center>
      <div className="card">
        <div className="card-body">
          <div class="row form-group mb-2">
            <label class="col-md-4">Total Cases:</label>
            <div class="input-group col-md-8">
              <span >{details.total_cases}</span>
            </div>
          </div>
          <div class="row form-group mb-2">
            <label class="col-md-4">Total Affected Countries:</label>
            <div class="input-group col-md-8">
              <span >{details.total_affected_countries}</span>
            </div>
          </div>
          <div class="row form-group mb-2">
            <label class="col-md-4">Recovery Cases:</label>
            <div class="input-group col-md-8">
              <span >{details.total_recovered}</span>
            </div>
          </div>
          <div class="row form-group mb-2">
            <label class="col-md-4">UnRecovered Cases:</label>
            <div class="input-group col-md-8">
              <span >{details.total_unresolved}</span>
            </div>
          </div>
          <div class="row form-group mb-2">
            <label class="col-md-4">Total Deaths:</label>
            <div class="input-group col-md-8">
              <span >{details.total_deaths}</span>
            </div>
          </div>
          <div class="row form-group mb-2">
            <label class="col-md-4">Total Active Cases:</label>
            <div class="input-group col-md-8">
              <span >{details.total_active_cases}</span>
            </div>
          </div>
          <div class="row form-group mb-2">
            <label class="col-md-4">Total New Cases Today:</label>
            <div class="input-group col-md-8">
              <span >{details.total_new_cases_today}</span>
            </div>
          </div>
          <div class="row form-group mb-2">
            <label class="col-md-4">Total New Deaths Today:</label>
            <div class="input-group col-md-8">
              <span >{details.total_new_deaths_today}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};