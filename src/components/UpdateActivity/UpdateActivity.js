import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { callApi } from "../../api";
import { Button, Container, TextField } from "@material-ui/core";
import useStyles from "./StylesUpdated";

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

                <h1 style={{textAlign: "center"}}>Update Activity</h1>
                <div>
                    <TextField
                        className={classes.topSpacing}
                        fullWidth={true}
                        label="activity name"
                        id="outlined-basic"
                        variant="outlined"
                        value={name}
                        onChange={activityNameHandler}
                        type="text"
                    />
                </div>

                <div>
                    <TextField
                    className={classes.topSpacing}
                    fullWidth={true}
                        label="description"
                        id="outlined-basic"
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
                    className={classes.topSpacing} 
                    variant="contained" 
                    type="submit">Submit</Button>
                </div>

            </form>
        </Container>
    )
}

export default UpdateActivity;