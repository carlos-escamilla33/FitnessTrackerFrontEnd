import React, { useState, useEffect, useContext } from "react";
import { callApi } from "../../api";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {
    Container,
    Typography,
    TextField,
    Switch,
    FormControlLabel,
    Button
} from "@material-ui/core";


const UpdateRoutine = () => {
    const { publicRoutines, routines, token } = useContext(UserContext);
    const { routineId } = useParams();
    const history = useHistory();
    const routine = routines.find(routine => routine.id === Number(routineId));
    const [name, setName] = useState(`${routine.name}`);
    const [goal, setGoal] = useState(`${routine.goal}`);
    const [isPublic, setIsPublic] = useState(Boolean(`${routine.isPublic}`));

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
            if (response) {
                console.log(response);
            }
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
        console.log(event.target.checked)
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
        <Container
            container="true"
            justify="center"
            align="center"
            bottomgutter="true"
        >
            <form onSubmit={submitHandler}>
                <div>
                    <TextField
                        value={name}
                        onChange={nameHandler}
                    />
                </div>
                <div>
                    <TextField
                        value={goal}
                        onChange={goalHandler}
                    />
                </div>
                <FormControlLabel
                    label="Make Routine Public"
                    control={
                        <Switch
                            checked={isPublic}
                            onChange={isPublicHandler}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    }
                /><br />
                <Button type="submit">Submit</Button>
            </form>
        </Container>
    )
}

export default UpdateRoutine;