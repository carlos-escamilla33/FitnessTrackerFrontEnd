import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { callApi } from "../api";
import { Button, Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        border: "2px solid white",
        height: "500px",
        width: "500px",
        padding: "50px",
        backgroundColor:"black",
        color: "white",
        borderRadius: "10px"
    },
    textField: {
        marginTop: "15px",
        marginBottom: "25px",
        backgroundColor: "white",
        borderRadius: "10"
    }
}));

const UpdateActivity = () => {
    const { allActivities, activities, token } = useContext(UserContext);
    const { activityId } = useParams();
    const activity = activities.find(activity => activity.id === Number(activityId));
    const [name, setName] = useState(`${activity.name}`);
    const [description, setDescription] = useState(`${activity.description}`);
    const navigate = useNavigate();
    const classes = useStyles();

    const updateActivity = async () => {
        try {
            const response = await callApi({
                url: `/activities/${activityId}`,
                method: "PATCH",
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
        setName(event.target.value);
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    useEffect(() => {
        allActivities();
    }, [])

    const submitHandler = (event) => {
        event.preventDefault();

        updateActivity();

        setName("");
        setDescription("");

        navigate("/activities");
    }

    return (
        <Container container="true" className={classes.container}>
            <form onSubmit={submitHandler} className={classes.form}>

                <h1 style={{ textAlign: "center" }}>Update Activity</h1>
                <div>
                    <TextField
                        className={classes.textField}
                        fullWidth={true}
                        variant="outlined"
                        value={name}
                        onChange={activityNameHandler}
                        type="text"
                    />
                </div>

                <div>
                    <TextField
                        className={classes.textField}
                        fullWidth={true}
                        variant="outlined"
                        value={description}
                        onChange={descriptionHandler}
                        type="text"
                    />
                </div>

                <div>
                    <Button
                        fullWidth={true}
                        color="primary"
                        variant="contained"
                        type="submit">Update Activity!</Button>
                </div>

            </form>
        </Container>
    )
}

export default UpdateActivity;