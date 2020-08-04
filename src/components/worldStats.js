import React, { Component } from "react";
import HelperComponent from "../UtilComponents/HelperComponent"
import WorldStatsCharts from "./WorldStatsCharts"
export default class worldStats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
    this.display = this.display.bind(this);
    this.value = 90;
  }

  display() {
    console.log(this.value);
    console.log("button clicked!");
    this.setState(prevState => ({ flag: !prevState.flag }));
  }

  render() {
    return (
      <div>
        <div className="text-left">World Stats Component
        <button onClick={this.display} >click</button>
          {this.state.flag ? <p>{this.value}</p> : null}
        </div>
        <div  className="text-left"><HelperComponent/></div>
        <div><WorldStatsCharts/></div>
      </div>
    );
  }
}
class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.display}>Click me</button>
    );
  }
}
