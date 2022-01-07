import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../api";

const ActivityRoutines = () => {
    const routineId= useParams();
    const [routines, setRoutines] = useState([]);

    const activityRoutines = async () => {
        try {
            const response = await callApi({
                url: `routines/${routineId}/routines`
            })
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
    });

    return (
        <>
            <h1>These routines match the activityId</h1>
            {
                routines.map(routine => (
                    <div key={routine.id}>
                        <h3>{routine.name}</h3>
                    </div>
                ))
            }
        </>
    )
}

export default ActivityRoutines;