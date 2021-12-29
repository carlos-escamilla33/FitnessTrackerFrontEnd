import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { callApi } from "../../api";
import groupWorkout from '../../media/groupWorkout.jpeg';
import {
    Container,
    Typography,
    TextField,
    Button,
    Switch,
    FormControlLabel,
    CardMedia
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    postForm: {
        backgroundColor: "white",
        margin: "30px",
        padding: "30px",
        borderRadius: "20px",
        width: "70%"
    },
    button: {
        borderRadius: "10px"
    },
    routineImage: {
        height: 700,
        width: 1000,
        margin: 'auto',
        marginBottom: "30px",
        borderRadius: "10px"
    },
}))

const PostRoutine = () => {
    const { token, publicRoutines } = useContext(UserContext);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const classes = useStyles()

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
            await publicRoutines();
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

    const submitHandler = (event) => {
        event.preventDefault();

        postRoutine();

        setName("");
        setGoal("");
        setIsPublic(false)
    }
    return (
        <Container
            container="true"
            justify="center"
            align="center"
            bottomgutter="true"
        >
            <div>
                < Typography variant="h3" >Welcome to the Workout Routines</Typography ><br />
                <Typography variant="h5">
                    Training smarter is going to allow you to maximize your results in the gym.
                    These fitness routines will help you better understand different workouts, nutrition, and more.
                    The goal of these routines is to provide you with resources that are going to help you be your healthiest self.
                </Typography><br />
            </div>
            {
                token ?
                    <form onSubmit={submitHandler} className={classes.postForm}>
                        <Typography variant="h5">Post your workout routine below!</Typography>
                        <TextField
                            label={'workout name'}
                            id="margin-normal"
                            fullWidth={true}
                            margin="normal"
                            variant="outlined"
                            onChange={workoutNameHandler}
                            value={name}
                        /><br />

                        <TextField
                            label={'describe your goal'}
                            id="outlined-textarea"
                            fullWidth={true}
                            margin="normal"
                            variant="outlined"
                            onChange={goalHandler}
                            value={goal}
                            multiline
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
                                size="large"
                                fullWidth={true}
                                className={classes.button}
                            >Submit</Button>
                        </div>
                    </form> : null
            }
        </Container >
    )
}

export default PostRoutine;