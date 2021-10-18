import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import PostRoutine from "../PostRoutine/PostRoutine";
import RoutineActions from "../RoutineActions/RoutineActions";
import {
    Grid,
    Container,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button,
    Box,
    TextField
} from "@material-ui/core";

const Routines = () => {
    const { token, user, routines, publicRoutines } = useContext(UserContext);
    // console.log("--->",Object.keys(routines).sort())
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