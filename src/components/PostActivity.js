import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Container, Typography, TextField, Button, Modal, Fade, Backdrop, } from "@material-ui/core"
import { callApi } from "../api";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    addActivityButton: {
        margin: 20,
        color: "white",
        fontSize: "20px",
        width: "280px",
        fontWeight: "900",
        border: "1px solid white",
        "&:hover": {
            backgroundImage: "linear-gradient(315deg, #000000 0%, #7f8c8d 74%)",
        },
    },
    postForm: {
        backgroundColor: "white",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: "30px",
        borderRadius: "20px",
        border: '2px solid #000',
        transform: 'translate(-50%, -50%)',
    },
    submitButton: {
        borderRadius: "10px"
    },
}));

const PostActivity = () => {
    const { token, allActivities } = useContext(UserContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        setOpen(false);
    }

    return (
        <Container
            container="true"
            justify="center"
            align="center"
            bottomgutter="true"
        >
            {
                token ?
                    <div>
                        <Button 
                        variant="outlined" 
                        className={classes.addActivityButton}
                        onClick={handleOpen}>Add An Activity</Button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
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
                                            className={classes.submitButton}
                                            fullWidth={true}
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >Submit</Button></div>
                                </form>
                            </Fade>
                        </Modal>
                    </div>
                    : ""
            }
        </Container >
    )
}

export default PostActivity;
