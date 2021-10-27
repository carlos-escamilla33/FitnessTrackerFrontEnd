import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { callApi } from "../../apiFunc";
import { UserContext } from "../../context/UserContext";

const ActivityRoutines = () => {
    // const { routines } = useContext(UserContext);
    const history = useHistory();
    const routineId= useParams();
    const [routines, setRoutines] = useState([]);

    const activityRoutines = async () => {
        try {
            const response = await callApi({
                url: `routines/${routineId}/routines`
            })
            console.log(response);
            if (response) {
                setRoutines(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        activityRoutines();
    })

    return (
        <>
            <h1>These routines match the activityId</h1>

        </>
    )
}

export default ActivityRoutines;