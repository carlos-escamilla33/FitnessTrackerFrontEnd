import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
    Container,
    Typography,
    TextField
} from "@material-ui/core";

const PostRoutine = () => {
    const {token} = useContext(UserContext);
    return (
        <Container
            container="true"
            justify="center"
            align="center"
            bottomgutter="true"
        >
            <Typography variant="h3">Workout Routines</Typography><br />
            <Typography variant="h5">Add your workout routine below</Typography><br />
            <TextField label={'workout name'} id="margin-normal" margin="normal" /><br />
            <TextField label={'describe your goal'} id="margin-normal" margin="normal" /><br />
            <TextField label={'isPublic'} id="margin-normal" margin="normal" /><br />
        </Container>
    )
}

export default PostRoutine;