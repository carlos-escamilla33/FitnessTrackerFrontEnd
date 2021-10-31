import React from "react";
import { makeStyles, } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    paper: {
        background: "#000000",
    },
    link: {
        textDecoration: "none",
        color: '#FFFFFF',
        fontSize: "30px",
        "&:hover": {
            color: "#FFBF00",
        }
    },
    icon: {
        color: "#FFFFFF",
    }
}));

export default useStyles;