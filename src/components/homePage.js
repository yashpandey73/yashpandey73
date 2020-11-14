import React, { Component } from "react";
import PdfComponent from "../UtilComponents/Pdf";
import accessible from "../static/accessible.svg";
import Particles from "../components/Particles";
import SocialComponent from "./Socials";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.flag = true;
        this.isMobile = window.innerWidth <= 768;
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
        const { classes } = this.props;
        return (
            <section id="MainDiv" className="">
                <div className="t-particles-0-2-34">
                    <canvas className="t-particlesCanvas-0-2-35" width="1366" height="625" ></canvas>
                    <Particles
                        canvasClassName="t-particlesCanvas-0-2-35"
                        className="t-particles-0-2-34"
                        isMobile={this.isMobile} />
                </div>
                <div style={cssDiv}>
                    <div className="" style={content}>
                        <h1>Hi there, This is Yash</h1>
                        <div className="form-group row">
                            <p className="col-sm">This is a personal project for React Js Hands On.</p>
                        </div>
                        <div className="form-group row">
                            <p className="col-sm">Will be Adding different React Concept as example to this website Over the Time.</p>
                        </div>
                    </div>
                </div>

                <div style={socialDiv} width="1366" height="625">
                    <SocialComponent />
                </div>

                {/* <section className="">
                    <PdfComponent />
                </section> */}

                <div className="feedback" style={feedbackDiv}>
                    <div className="">
                        <div className="" style={{fontFamily:"Roboto"}}>
                            <h5>Send in your Suggestions, We'll get back to You.</h5>
                        </div>
                        <div className="">
                            <form onSubmit={(e) => this.sendQuery(e)} className="">
                                <div className="">
                                    <textarea id="textarea" style={{ width: "100%" }} defaultValue={this.state.textarea} />
                                </div>
                                <div className="">
                                    <input type='submit' />
                                    {/* <button onClick={(e) => this.sendQuery(e)} className="btn btn-primary">Submit</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="" style={catGif}>
                        <img alt="" src={accessible} width="200px" height="200px" loading="lazy" />
                    </div>
                </div>
            </section>
        );
    }
}

//exportdefault injectSheet(styles);

const styles = theme => ({
    content: {
        textAlign: "center",
        fontFamily: "'Open Sans', sans-serif",
        color: "#fff",
        marginTop: theme.navHeight,
        marginBottom: theme.navHeight,
        padding: "1rem",
        paddingTop: 0,
    }
});

const content = {
    textAlign: "center",
    fontFamily: "'Open Sans', sans-serif",
    color: "#fff",
    padding: "1rem",
    paddingTop: 0,
};

const cssDiv = {
    padding: "1rem",
    paddingBottom: "2rem"
};
const socialDiv = {
    padding: "1rem",
    paddingBottom: "15rem"
};

const feedbackDiv = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    paddingTop: "5rem",
    paddingLeft: "3rem",
    paddingBottom: "3rem",
    backgroundColor: "hsl(212, 33%, 89%)"

};

const catGif = {
    padding: "0 3rem"
};