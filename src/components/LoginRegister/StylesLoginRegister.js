import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    link : {
        cursor: "pointer"
    },
    container: {
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    topSpacing: {
        marginTop: "20px"
    }
}))

export default useStyles;