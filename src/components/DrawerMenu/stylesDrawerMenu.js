import React from "react";
import { makeStyles, } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    paper: {
        background: "white",
    },
    link: {
        textDecoration: "none",
        color: 'black',
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