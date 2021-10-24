import React, { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { callApi } from "../../apiFunc";
import { Button, TextField } from "@material-ui/core";

const UpdateActivity = () => {
    const { allActivities, activities, token } = useContext(UserContext);
    const { activityId } = useParams();
    const activity = activities.find(activity => activity.id === Number(activityId));
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

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
            if (response) {
                console.log(response);
            }
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

        history.push("/activities");
    }

    return (
        <>
            <form onSubmit={submitHandler}>

                <h1>Update Activity</h1>

                <div>
                    <TextField
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
                        label="description"
                        id="outlined-basic"
                        variant="outlined"
                        value={description}
                        onChange={descriptionHandler}
                        type="text"
                    />
                </div>

                <div>
                    <Button color="primary" variant="contained" type="submit">Submit</Button>
                </div>

            </form>
        </>
    )
}

export default UpdateActivity;