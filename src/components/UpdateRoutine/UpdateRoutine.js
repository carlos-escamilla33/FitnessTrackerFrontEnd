import React, { useState, useEffect, useContext } from "react";
import { callApi } from "../../api";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {
    Container,
    TextField,
    Switch,
    FormControlLabel,
    Button
} from "@material-ui/core";
import useStyles from "./StylesUpdatedRoutine";


const UpdateRoutine = () => {
    const { publicRoutines, routines, token } = useContext(UserContext);
    const { routineId } = useParams();
    const history = useHistory();
    const routine = routines.find(routine => routine.id === Number(routineId));
    const [name, setName] = useState(`${routine.name}`);
    const [goal, setGoal] = useState(`${routine.goal}`);
    const [isPublic, setIsPublic] = useState(Boolean(`${routine.isPublic}`));
    const classes = useStyles();

    const updateRoutine = async () => {

        try {
            const response = await callApi({
                url: `/routines/${routineId}`,
                method: "PATCH",
                token,
                body: {
                    name,
                    goal,
                    isPublic
                }
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const goalHandler = (event) => {
        setGoal(event.target.value)
    }

    const isPublicHandler = (event) => {
        setIsPublic(event.target.checked);
    };

    useEffect(() => {
        publicRoutines();
    }, [])

    const submitHandler = (event) => {
        event.preventDefault();

        updateRoutine();

        setName("");
        setGoal("");

        history.push("/routines");
    }

    return (
        <>
            {
                token ?
                    <Container
                        className={classes.container
                        }
                        container="true"
                        justify="center"
                        align="center"
                        bottomgutter="true"
                    >
                        <form onSubmit={submitHandler} className={classes.form}>
                            <h1>Update Your Routine!</h1>
                            <div>
                                <TextField
                                className={classes.topSpacing}
                                    variant="outlined"
                                    fullWidth={true}
                                    value={name}
                                    onChange={nameHandler}
                                />
                            </div>
                            <div>
                                <TextField
                                    variant="outlined"
                                    fullWidth={true}
                                    className={classes.topSpacing}
                                    value={goal}
                                    onChange={goalHandler}
                                />
                            </div>
                            <FormControlLabel
                                className={classes.topSpacing}
                                label="Make Routine Public"
                                control={
                                    <Switch
                                        checked={isPublic}
                                        onChange={isPublicHandler}
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                }
                            /><br />
                            <Button
                                variant="contained"
                                fullWidth={true}
                                className={classes.topSpacing}
                                type="submit">Submit</Button>
                        </form>
                    </Container >
                    : null
            }
        </>
    )
}

export default UpdateRoutine;