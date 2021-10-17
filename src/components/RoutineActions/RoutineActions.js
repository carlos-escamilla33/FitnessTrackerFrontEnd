import React, { useContext } from "react";
import { callApi } from "../../apiFunc";
import { UserContext } from "../../context/UserContext";

const RoutineActions = () => {
    // goal is to make a new form route and then update it down below
    const {
        name,
        setName,
        goal,
        setGoal,
        isPublic,
        setIsPublic
    } = useContext(UserContext)
    const { routineId } = useParms();

    const updateRoutine = async () => {
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
    return (
        <></>
    )
}