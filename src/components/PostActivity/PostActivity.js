import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { callApi } from "../../apiFunc";

const PostActivity = () => {
    const { token, allActivities } = useContext(UserContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

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
            if (response) {
                console.log(response);
            }
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
        <>
            {
                token ?
                    <Container
                        container="true"
                        justify="center"
                        align="center"
                        bottomgutter="true"
                    >
                        < Typography variant="h3" > Activities</Typography ><br />
                        <Typography variant="h5">Add your activity below</Typography><br />
                        <form onSubmit={submitHandler}>
                            <TextField
                                label={'activity name'}
                                id="margin-normal"
                                margin="normal"
                                onChange={activityNameHandler}
                                value={name}
                            /><br />

                            <TextField
                                label={'describe your activity'}
                                id="margin-normal"
                                margin="normal"
                                onChange={descriptionHandler}
                                value={description}
                            /><br />
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

export default PostActivity;
