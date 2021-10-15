import React, { useContext, useEffect, useState } from "react";
import { callApi } from "../../apiFunc";
import { UserContext } from "../../context/UserContext"
import "./UserRoutines.css";

const UserRoutines = () => {
    const { token, user } = useContext(UserContext);
    const [routines, setRoutines] = useState([]);
    // we are using a route that uses params here
    // we want to replace part of the url with the username

    const userRoutines = async () => {
        try {
            response = await callApi({
                url: `/users/${user}/routines`,
                token
            })
            if (routines) {
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
                routines.map(routine => {
                    return (
                        <div>
                            <h3>{routine.creatorName}</h3>
                            <p>{routine.name}</p>
                            <p>{routine.goal}</p>
                            <p>{routine.activity}</p>
                        </div>
                    )
                })
            }
        </>
    )

}

export default UserRoutines;