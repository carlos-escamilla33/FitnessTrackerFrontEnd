import React from "react";
import PostRoutine from "./PostRoutine";
import RoutineActions from "./RoutineActions";
import {
    Container,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    routinesContainer: {
        minHeight: "100vh"
    }
}))

const Routines = () => {
    const classes = useStyles()
    return (
        <>
            <Container container="true" className={classes.routinesContainer}>
                <PostRoutine />
                <RoutineActions />
            </Container >
        </>
    )
}

export default Routines;