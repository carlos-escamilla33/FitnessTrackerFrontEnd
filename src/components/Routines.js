import React from "react";
import PostRoutine from "./PostRoutine";
import RoutineActions from "./RoutineActions";
import {
    Container,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    routinesContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh"
    }
}))

const Routines = () => {
    const classes = useStyles()
    return (
        <>
            <Container container="true" className={classes.routinesContainer}>
                <RoutineActions />
            </Container >
        </>
    )
}

export default Routines;