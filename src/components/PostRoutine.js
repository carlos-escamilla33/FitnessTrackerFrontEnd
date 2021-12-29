import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { callApi } from "../api";
import {
    Container,
    Typography,
    TextField,
    Button,
    Switch,
    FormControlLabel,
    Backdrop,
    Box,
    Modal,
    Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    postForm: {
        backgroundColor: "white",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // marginTop: "40%",
        padding: "30px",
        borderRadius: "20px",
        // width: "70%",
        border: '2px solid #000',
        transform: 'translate(-50%, -50%)',
    },
    submitButton: {
        borderRadius: "10px"
    },
}))

const PostRoutine = () => {
    const { token, publicRoutines } = useContext(UserContext);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        setOpen(false)
    }
    return (
        <>
            {
                token ?
                    <div>
                        <Button onClick={handleOpen}>Add A Routine</Button>
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
                                                className={classes.submitButton}
                                            >Submit</Button>
                                        </div>
                                    </form>
                            </Fade>
                        </Modal>
                    </div>
                    : null
            }
        </>
    )
}

export default PostRoutine;


{/* <Container
                                    container="true"
                                    justify="center"
                                    align="center"
                                    bottomgutter="true"
                                >
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
                                                className={classes.submitButton}
                                            >Submit</Button>
                                        </div>
                                    </form>
                                </Container > : <Button variant="contained" onClick={addRoutineHandler}>Add Routine</Button> */}