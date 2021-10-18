import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import PostRoutine from "../PostRoutine/PostRoutine";
import RoutineActions from "../RoutineActions/RoutineActions";
import {
    Grid,
    Container
} from "@material-ui/core";

const Routines = () => {
    const {
        publicRoutines,
    } = useContext(UserContext);

    useEffect(() => {
        publicRoutines();
    }, [])

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