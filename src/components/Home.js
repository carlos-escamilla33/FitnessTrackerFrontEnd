import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import gym from '../media/gym.png';

const useStyles = makeStyles(() => ({
    img: {
        minHeight: "70vh",
        backgroundImage: `url(${gym})`,
        backgroundSize: "cover",
    },
    textContainer: {
        display: "flex",
        justifyContent: "center",
    },
    text: {
        position: "absolute",
        textAlign: "center",
        fontSize: "50px",
        color: "white"
    },
    title: {
        display: "flex",
        justifyContent: "center",
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Paper>
            <div className={classes.textContainer}>
                <Typography className={classes.text}>Welcome to FitnessTracker</Typography>
            </div>
            <div className={classes.img} />
            <div className={classes.title}>
            </div>
        </Paper>
    )
}

export default Home;