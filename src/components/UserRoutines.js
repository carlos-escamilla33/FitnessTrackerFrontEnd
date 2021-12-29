import React, { useContext, useEffect, useState } from "react";
import { callApi } from "../api";
import { UserContext } from "../context/UserContext"
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    routines: {
        textAlign: "center",
        fontSize: "25px"
    },
}));

const UserRoutines = () => {
    const { token, user } = useContext(UserContext);
    const [routines, setRoutines] = useState([]);
    const classes = useStyles();

    const userRoutines = async () => {
        try {
            const response = await callApi({
                url: `/users/${user}/routines`,
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
            {
                token ?
                    <Container container="true" className={classes.routines}>
                        <h1>My personal routines</h1>
                        <p>These are all your routines you've posted</p><br />
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
                    </Container>
                    : null
            }
        </>
    )
}

export default UserRoutines;