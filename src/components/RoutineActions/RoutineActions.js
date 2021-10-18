import React, { useContext, useEffect } from "react";
import { callApi } from "../../apiFunc";
import { UserContext } from "../../context/UserContext";
import {
    Button
} from "@material-ui/core";

const RoutineActions = () => {
    // goal is to make a new form route and then update it down below
    const {
        name,
        setName,
        goal,
        setGoal,
        isPublic,
        setIsPublic,
        token,
        setRoutines
    } = useContext(UserContext)

    const refetchRoutines = async () => {
        try {
            const response = await callApi({
                url: "/routines",
            });
            console.log(response);
            if (response) {
                setRoutines(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const updateRoutine = async (routineId) => {
        try {
            const response = await callApi({
                url: `/routines/${routineId}`,
                method: "PATCH",
                body: {
                    name,
                    goal,
                    isPublic
                }
            })
            if (response) {
                console.log(response)
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    const deleteRoutine = async (routineId) => {
        try {
            const response = await callApi({
                url: `/routines/${routineId}`,
                method: "DELETE",
                token
            })
            await refetchRoutines();
            if (response) {
                console.log(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        refetchRoutines();
    }, []);

    return (
        <>
            <Button
                color="inherit"
                size="small"
            >Edit</Button>
            <Button
                color="secondary"
                size="small"
                // onClick={}
            >Delete</Button>
        </>
    )
}

export default RoutineActions;