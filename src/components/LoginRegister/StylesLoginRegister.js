import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    link: {
        cursor: "pointer"
    },
    title: {
        textAlign: "center",
        color: "black"
    },
    container: {
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    form : {
        marginTop: "30px",
        height: "600px",
        width: "600px",
        padding: "100px",
        backgroundColor:"white",
        borderRadius: "10px"
    },
    topSpacing: {
        marginTop: "25px"
    }
}))

export default useStyles;