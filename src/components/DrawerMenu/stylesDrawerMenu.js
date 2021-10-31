import React from "react";
import { makeStyles, } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    paper: {
        background: "#000000",
    },
    link: {
        textDecoration: "none",
        color: 'white',
        fontSize: "30px",
        "&:hover": {
            color: "#FFBF00",
        }
    },
    icon: {
        color: "white",
    }
}));

export default useStyles;