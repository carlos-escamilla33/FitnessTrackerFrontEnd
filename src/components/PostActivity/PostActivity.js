import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Container, Typography, TextField, Button } from "@material-ui/core"

const PostActivity = () => {
    const { token } = useContext(UserContext);
    const [activityName, setActivityName] = useState("");
    const [description, setDescription] = useState("");

    const activityNameHandler = (event) => {
        setActivityName(event.target.value)
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        setActivity("");
        setDescription("");
    }

    // useEffect(() => {
    //     allActivities();
    // }, [])

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
                                value={activityName}
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
