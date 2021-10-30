import React, { useContext, useEffect, useState } from "react";
import { callApi } from "../../api";
import { UserContext } from "../../context/UserContext"
import "./UserRoutines.css";

const UserRoutines = () => {
    const { token, user } = useContext(UserContext);
    const [routines, setRoutines] = useState([]);

    const userRoutines = async () => {
        try {
            const response = await callApi({
                url: `/users/${user}/routines`,
                token
            });
            console.log(response)
            if (response) {
                setRoutines(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userRoutines();
    }, []);

    return (
        <>
            {
                token ?
                    <>
                        <h1>My personal routines</h1>
                        {
                            routines.map(routine => {
                                return (
                                    <div key={routine.id}>
                                        <h3>{routine.creatorName}</h3>
                                        <p>{routine.name}</p>
                                        <p>{routine.goal}</p>
                                        <p>{routine.activity}</p>
                                    </div>
                                )
                            })
                        }
                    </>
                    : null
            }
        </>
    )
}

export default UserRoutines;