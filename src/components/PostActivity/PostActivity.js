import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { callApi } from "../../api";
import useStyles from "./StylesActivity";

const PostActivity = () => {
    const { token, allActivities } = useContext(UserContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const classes = useStyles();

    const postActivity = async () => {
        try {
            const response = await callApi({
                url: "/activities",
                method: "POST",
                token,
                body: {
                    name,
                    description
                }
            })
            await allActivities();
        }
        catch (error) {
            console.log(error);
        }
    }

    const activityNameHandler = (event) => {
        setName(event.target.value)
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        postActivity();

        setName("");
        setDescription("");
    }

    return (
        <Container
            container="true"
            justify="center"
            align="center"
            bottomgutter="true"
        >
            < Typography variant="h3" >Welcome to the Activities</Typography ><br />
            <Typography variant="h5">This page consists of single easy to do activities that are part of routines.
                Many activities can form one routine. Physical activity has so many benefits to your health.
                It can help you get to and stay at a healthy body weight, reduce the risk of bone fractures if you have osteoporosis, and can reduce the risk of many other illnesses like cancer and heart disease.
            </Typography><br />
            {
                token ?
                    <form onSubmit={submitHandler} className={classes.postForm}>
                        <Typography variant="h5">Post your single activity below!</Typography>
                        <TextField
                            label={'activity name'}
                            id="margin-normal"
                            margin="normal"
                            fullWidth={true}
                            variant="outlined"
                            onChange={activityNameHandler}
                            value={name}
                        /><br />

                        <TextField
                            label={'describe your activity'}
                            id="margin-normal"
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                            onChange={descriptionHandler}
                            value={description}
                        /><br />
                        <div>
                            <Button
                                className={classes.button}
                                fullWidth={true}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >Submit</Button></div>
                    </form> : null
            }
        </Container >
    )
}

export default PostActivity;
