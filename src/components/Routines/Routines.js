import React from "react";
import PostRoutine from "../PostRoutine/PostRoutine";
import RoutineActions from "../RoutineActions/RoutineActions";
import {
    Grid,
    Container,
} from "@material-ui/core";

const Routines = () => {
    return (
        <>
            <Container>
                <PostRoutine />
                <Grid container spacing={3}>
                    <RoutineActions />
                </Grid>
            </Container >
        </>
    )
}

export default Routines;