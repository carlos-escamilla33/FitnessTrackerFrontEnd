import React from "react";
import useStyles from "./StylesFooter"
import { Container, Grid, Box, Link } from "@material-ui/core";

const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.phantom} />
            <div className={classes.footer}>
                <div>
                <Link href="/users/login">Children</Link>
                </div>
                <Link href="/users/login">Children</Link>
            </div>
        </div>
    )
}

export default Footer;