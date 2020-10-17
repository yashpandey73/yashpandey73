import React, { Component } from "react";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.flag = true;
    }

    state = {
        flag: false,
        textarea: "this is text area"
    }

    sendQuery(ev) {
        console.log(ev.target.value);
        console.log(this.state.textarea);
        //ev.preventDefault();
        //this.setState();
    }

    render() {

        return (
            <div id="MainDiv" className="container">
                <h1>Hi there, This is Yash</h1>
                <div className="form-group row">
                    <p class="col-sm-4">This is a personal project for React Js Hands On.</p>
                </div>
                <div className="form-group row">
                    <p class="col-sm">Will be Adding different React Concept as example to this website Over the Time.</p>
                </div>
                <div className="form-group row">
                    <h5>Send in your Suggestions, We'll get back to You.</h5>
                </div>
                <div className="form-group row">
                    <form onSubmit={(e) => this.sendQuery(e)} className="col s10">
                        <div className="row">
                            <textarea id="textarea" className="col-sm-6" defaultValue={this.state.textarea} />
                        </div>
                        <div className="row">
                        <input        type='submit'      />
                            {/* <button onClick={(e) => this.sendQuery(e)} className="btn btn-primary">Submit</button> */}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}