import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { callApi } from "../../apiFunc";
import { UserContext } from "../../context/UserContext"
import "./UserRoutines.css";

const UserRoutines = () => {
    const { token } = useContext(UserContext);
    const params = useParams();
    const [routines, setRoutines] = useState([]);

    console.log(`users/${params.username}/routines`)

    const userRoutines = async () => {
        try {
            const response = await callApi({
                url: `/users/${params.username}/routines`,
                token
            });
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
            <h1>My personal routines</h1>
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