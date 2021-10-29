import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    },
    phantom: {
        display: "block",
        padding: "20px",
        height: "60px",
        width: "100%",
        marginTop: "30px",
    }
}))

export default useStyles;