import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../api";
import error from '../media/404.gif';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    userTitleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white"
    },
    noPostsContainer: {
         minHeight: "100vh",
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
    },
    errorImg: {
        backgroundImage: `url(${error})`,
        backgroundSize: "cover",
        [theme.breakpoints.up("xs")]: {
            minHeight: "50vh"
        },
        [theme.breakpoints.up("sm")]: {
            minHeight: "85vh"
        },
        [theme.breakpoints.up("md")]: {
            minHeight: "88vh"
        },
        [theme.breakpoints.up("lg")]: {
            minHeight: "128vh"
        }
    },
}));

const ActivityRoutines = () => {
    const routineId = useParams();
    const [routines, setRoutines] = useState([]);
    const classes = useStyles();

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
                routines.length ? routines.map(routine => (
                    <div key={routine.id}>
                        <h3>{routine.name}</h3>
                    </div>
                )) :
                    <div className={classes.errorImg} />
            }
        </>
    )
}

export default ActivityRoutines;