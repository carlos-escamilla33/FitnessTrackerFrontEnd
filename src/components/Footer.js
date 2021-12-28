import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles(() => ({
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: "60px",
        backgroundColor: "#111010"
    },
    a: {
        color: "white",
        "&:hover": {
            color: "#1776d1",
        }
    },
    container: {
       marginRight: "13%"

    },
    button: {
        backgroundColor: "white",
        textDecoration: "none",
        padding: "18px",
        fontSize: "20px",
        fontWeight: "900",
        color: "black",
        borderRadius: '25px',
        "&:hover": {
            backgroundColor: "#f0f0f0",
        }
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.footer} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <div className={classes.container}>
                <a className={classes.button} href="mailto:Crodriguezescamilla3@gmail.com">
                    | Contact Us |
                </a>
            </div>
            <a className={classes.a} href="mailto:Crodriguezescamilla3@gmail.com">
                <LinkedInIcon fontSize="large" />
            </a>
            <a className={classes.a} href="mailto:Crodriguezescamilla3@gmail.com">
                <TwitterIcon fontSize="large" />
            </a>
            <a className={classes.a} href="mailto:Crodriguezescamilla3@gmail.com">
                <GitHubIcon fontSize="large" />
            </a>
        </Paper>
    )
}

export default Footer;