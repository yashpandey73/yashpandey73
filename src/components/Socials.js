import React, { Component, useState } from "react";
import injectSheet from "react-jss";
import GithubCircleIcon from "mdi-react/GithubIcon";
import LinkedinCircleIcon from "mdi-react/LinkedinIcon";
import EmailIcon from "mdi-react/EmailIcon";
import WebIcon from "mdi-react/WebIcon";

const styles = theme => ({
    root: {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    content: {
        textAlign: "center",
        fontFamily: "'Open Sans', sans-serif",
        color: "#fff",
        /*  marginTop: theme.navHeight,
         marginBottom: theme.navHeight, */
        padding: "1rem",
        paddingTop: 0,
    },
    greeting: {
        fontWeight: 600,
        fontSize: "4rem",
        /*  [theme.breakpoints.down("md")]: {
           fontSize: "3rem",
         },
         [theme.breakpoints.down("sm")]: {
           fontSize: "2rem",
         }, */
        color: "rgba(255, 255, 255, 0.96)",
        marginTop: 0,
        marginBottom: "0.75rem",
    },
    description: {
        fontWeight: "normal",
        fontSize: "3rem",
        /* [theme.breakpoints.down("md")]: {
          fontSize: "2.25rem",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.5rem",
          minHeight: "4.3rem",
        }, */
        color: "rgba(255, 255, 255, 0.93)",
        marginTop: 0,
    },
    socialMediaLink: {
        display: "inline-block",
        border: "none",
        cursor: "pointer",
        width: "3rem",
        height: "3rem",
        margin: "0 0.5rem",
        backgroundColor: "#225da5",
        transition: "background-color 0.2s, color 0.2s",
        color: "#fff",
        "&:focus": {
            outline: "none",
        },
        "&:hover, &:focus": {
            color: "#0F609B",
            backgroundColor: "#fff"
        },
        borderRadius: "100%",
        padding: 0,
        lineHeight: "3.75rem",
        textDecoration: "none",
    },
    particles: {
        backgroundImage: "linear-gradient(-45deg, #0F609B 0%, #2680C2 100%)",
        position: "absolute",
        zIndex: "-10",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    particlesCanvas: {
        display: "block",
        verticalAlign: "bottom",
    }
});

const CircleIcon = {

    display: "inline-block",
    border: "none",
    cursor: "pointer",
    width: "3rem",
    height: "3rem",
    margin: "0 0.5rem",
    backgroundColor: "#225da5",
    transition: "background-color 0.2s, color 0.2s",
    color: "#fff",
    "&:focus": {
        outline: "none",
    },
    "&:hover, &:focus": {
        color: "#0F609B",
        backgroundColor: "#fff"
    },
    borderRadius: "100%",
    padding: 0,
    lineHeight: "2.75rem",
    textDecoration: "none"
};

export default class SocialComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={{}} style={{textAlign: "center"}}>
                <a href="https://github.com/yashpandey73" style={CircleIcon}>
                    <GithubCircleIcon size={24} /></a>
                <a href="https://www.linkedin.com/in/yash-pandey-85a806107/" style={CircleIcon}>
                    <LinkedinCircleIcon size={24} /></a>
            </div>
        )
    }
}
/* export default injectSheet(styles)(SocialComponent); */