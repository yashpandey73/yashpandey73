import React, { Component } from "react";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.flag = true;
    }

    state = {
        flag: false
    }

    render() {

        return (
        <div>
            <h1>This is HomePage</h1>
            <h3>Website Under Construction</h3>
        </div>
        );
    }
}