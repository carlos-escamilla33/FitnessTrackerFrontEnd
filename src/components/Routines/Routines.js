import React, { useContext, useEffect, useState } from "react";
import { callApi } from "../../apiFunc";
import "./Routines.css"

const Routines = () => {
    const [routines, setRoutines] = useState([]);

    const publicRoutines = async () => {
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

    useEffect(() => {
        publicRoutines();
    }, [])

    return (
        <>
            {
                routines.map(routine => {
                    return (
                        <div key={routine.id}>
                            <h3>{routine.creatorName}</h3>
                            <p>{routine.goal}</p>
                            <p>{routine.name}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Routines;