import React, { Component } from "react";


export default class HelperComponent extends Component {

  constructor(props) {
    super(props);
    this.info = this.info.bind(this);
  }
  state = {
    details: Object,
    flag: false
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
        <h4>Click below For Corona Virus World Stats</h4>
        <button onClick={this.info} >Stats</button>
        {this.state.flag ? <Contacts details={this.state.details} /> : null}
      </div>

    )
  }

}
export const Contacts = ({ details }) => {
  return (
    <div>
      <center><h1>Corona Virus Updated List</h1></center>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Total Cases: {details.total_cases}</h2>
          <h5 className="card-title">Total Affected Countries</h5><p>{details.total_affected_countries}</p>
          <h6 className="card-subtitle mb-2 text-muted">Recovery Cases:</h6><p>{details.total_recovered}</p>
          <h6 className="card-subtitle mb-2 text-muted">UnRecovered Cases:</h6><p>{details.total_unresolved}</p>
          <h6 className="card-subtitle mb-2 text-muted">Total Deaths:</h6><p className="card-text">{details.total_deaths}</p>
          <h6 className="card-subtitle mb-2 text-muted">Total Active Cases:</h6><p className="card-text">{details.total_active_cases}</p>
          <h6 className="card-subtitle mb-2 text-muted">Total New Cases Today:</h6><p className="card-text">{details.total_new_cases_today}</p>
          <h6 className="card-subtitle mb-2 text-muted">Total New Deaths Today:</h6><p className="card-text">{details.total_new_deaths_today}</p>
        </div>
      </div>
    </div>
  )
};