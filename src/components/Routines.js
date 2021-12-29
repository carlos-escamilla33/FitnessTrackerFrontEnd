import React from "react";
import PostRoutine from "./PostRoutine";
import RoutineActions from "./RoutineActions";
import {
    Grid,
    Container,
} from "@material-ui/core";

const Routines = () => {
    return (
        <>
            <Container container="true">
                <PostRoutine />
                <RoutineActions />
            </Container >
        </>
    )
}

export default Routines;