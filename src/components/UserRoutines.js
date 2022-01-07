import React, { useContext, useEffect, useState } from "react";
import { callApi } from "../api";
import { UserContext } from "../context/UserContext"
import { Container, Typography } from "@material-ui/core";
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    userTitleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white"
    },
    userRoutinesContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        fontSize: "25px"
    },
    userRoutine: {
        border: "2px solid white",
        borderRadius: "25px",
        margin: "20px",
        width: "300px"
    }
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
            <div className={classes.userTitleContainer}>
                <Typography variant="h2">My Personal Routines</Typography>
                <Typography variant="h5">These are all your routines you've posted</Typography>
            </div>
            <div className={classes.userRoutinesContainer}>
                {
                    token ?
                        <Container container="true" className={classes.userRoutinesContainer}>
                            {
                                routines.map(routine => {
                                    return (
                                        <div key={routine.id} className={classes.userRoutine}>
                                            <h3><FaceOutlinedIcon /><br/>{routine.creatorName}</h3>
                                            <p>{routine.name}</p>
                                            <p><EmojiFlagsOutlinedIcon /><br/>Goal: {routine.goal}</p>
                                            <p>{routine.activity}</p>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                        : ""
                }
            </div>
        </>
    )
}

export default UserRoutines;