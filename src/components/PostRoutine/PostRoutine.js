import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { callApi } from "../../apiFunc";
import {
    Container,
    Typography,
    TextField,
    Button
} from "@material-ui/core";

const PostRoutine = () => {
    const {
        token,
        publicRoutines,
        name,
        setName,
        goal,
        setGoal,
        isPublic,
        setIsPublic
    } = useContext(UserContext);

    const postRoutine = async () => {
        try {
            const response = await callApi({
                url: "/routines",
                method: "POST",
                token,
                body: {
                    name,
                    goal,
                    isPublic
                }
            })
            if (response) {
                console.log(response)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const workoutNameHandler = (event) => {
        setName(event.target.value)
    }

    const goalHandler = (event) => {
        setGoal(event.target.value);
    }

    const isPublicHandler = (event) => {
        setIsPublic(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        postRoutine();

        setName("");
        setGoal("");
        setIsPublic("")

        publicRoutines();
    };

    return (
        <>
            {
                token ?
                    <Container
                        container="true"
                        justify="center"
                        align="center"
                        bottomgutter="true"
                    >
                        < Typography variant="h3" > Workout Routines</Typography ><br />
                        <Typography variant="h5">Add your workout routine below</Typography><br />
                        <form onSubmit={submitHandler}>
                            <TextField
                                label={'workout name'}
                                id="margin-normal"
                                margin="normal"
                                onChange={workoutNameHandler}
                                value={name}
                            /><br />

                            <TextField
                                label={'describe your goal'}
                                id="margin-normal"
                                margin="normal"
                                onChange={goalHandler}
                                value={goal}
                            /><br />

                            <TextField
                                label={'isPublic'}
                                id="margin-normal"
                                margin="normal"
                                onChange={isPublicHandler}
                                value={isPublic}
                            /><br />
                            <Button
                                type="submit"
                                variant="contained"
                                size="small"
                                color="primary"
                            >Submit</Button>
                        </form>
                    </Container > : null
            }
        </>
    )
}

export default PostRoutine;