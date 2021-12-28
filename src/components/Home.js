import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import gym from '../media/gym5.jpg';

const useStyles = makeStyles(() => ({
    container: {
        position: "relative"
    },
    textContainer: {
        display: "flex",
        justifyContent: "center",
        mx: "auto"
    },
    img: {
        minHeight: "90vh",
        backgroundImage: `url(${gym})`,
        backgroundSize: "cover",
    },
    text: {
        position: "absolute",
        textAlign: "center",
        fontSize: "70px",
        fontWeight: "900",
        color: "white",
        marginTop: "10%"
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <div className={classes.textContainer}>
                <Typography className={classes.text}>
                    Welcome to FitnessTracker
                    <Typography variant='h5'>
                        Find out what you are capable of and start your workout today!
                    </Typography>
                </Typography>
            </div>
            <div className={classes.img} />
        </Paper>
    )
}

export default Home;