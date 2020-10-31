import React, { Component } from "react";
import PdfComponent from "../UtilComponents/Pdf";
import accessible from "../static/accessible.svg";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.flag = true;
    }

    state = {
        flag: false,
        textarea: ""
    }

    sendQuery(ev) {
        console.log(ev.target.value);
        console.log(this.state.textarea);
        //ev.preventDefault();
        //this.setState();
    }

    render() {

        return (
            <section id="MainDiv" className="container">
                <section className="subHeader">
                    <h1>Hi there, This is Yash</h1>
                    <div className="form-group row">
                        <p className="col-sm-4">This is a personal project for React Js Hands On.</p>
                    </div>
                    <div className="form-group row">
                        <p className="col-sm">Will be Adding different React Concept as example to this website Over the Time.</p>
                    </div>
                </section>

                <section className="pdfSection">
                    <PdfComponent />
                </section>

                <section className="suggestionSection">
                    <div className="warpper">
                        <div className="richContent">
                            <div className="text">
                                <div className="">
                                    <h5>Send in your Suggestions, We'll get back to You.</h5>
                                </div>
                                <div className="">
                                    <form onSubmit={(e) => this.sendQuery(e)} className="col s10">
                                        <div className="row">
                                            <textarea id="textarea" className="col-sm-6" defaultValue={this.state.textarea} />
                                        </div>
                                        <div className="row">
                                            <input type='submit' />
                                            {/* <button onClick={(e) => this.sendQuery(e)} className="btn btn-primary">Submit</button> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="illustration">
                                <img alt="" src={accessible}  width="200px" height="200px" loading="lazy" />
                            </div>
                        </div>
                    </div>


                </section>

                {/* <section>
                    <div className="wrapper">
                        <div className="text">
                        <h2>Accessible</h2>
                                <p>React-PDF not only renders PDFs as images, but also as transparent text layers that can be read by screen readers, helping visually impaired to access your content.</p>
                        </div>
                        <div className="illustration">
                        <img alt="" src={accessible} loading="lazy"/>
                        </div>
                    </div>
                </section> */}
            </section>
        );
    }
}