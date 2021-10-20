import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navLinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    appBar: {
        background: "black",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        color: '#FFBF00',
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            color: '#FFBF00',
            borderBottom: "1px solid white",
        },
    },
}))

export default useStyles