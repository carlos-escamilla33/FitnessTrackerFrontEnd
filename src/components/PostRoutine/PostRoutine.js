import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { callApi } from "../../apiFunc";
import {
    Container,
    Typography,
    TextField,
    Button,
    Switch,
    FormControlLabel
} from "@material-ui/core";

const PostRoutine = () => {
    const { token, publicRoutines } = useContext(UserContext);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(true);

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
        setIsPublic(event.target.checked);
    };

    useEffect(() => {
        if (submitHandler) {
            publicRoutines();
        }
    }, [])

    const submitHandler = (event) => {
        event.preventDefault();

        postRoutine();

        setName("");
        setGoal("");
        setIsPublic("")

        publicRoutines();
    }
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
                            <FormControlLabel
                                label="Make Routine Public"
                                control={
                                    <Switch
                                        checked={isPublic}
                                        onChange={isPublicHandler}
                                        name="public"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                }
                            />
                            <div>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >Submit</Button></div>
                        </form>
                    </Container > : null
            }
        </>
    )
}

export default PostRoutine;