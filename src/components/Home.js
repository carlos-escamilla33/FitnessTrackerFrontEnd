import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import gym from '../media/gym5.jpg';
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
    routineButton: {
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        marginRight: "110px",
        marginLeft: "110px",
        fontSize: "25px",
        fontStyle: "italic",
        borderRadius: "5px",
        padding: "10px",
        textDecoration: "none",
        color: "black",
        backgroundColor: "white",
        border: "2px solid ",
        "&:hover": {
            backgroundImage: "linear-gradient(315deg, #000000 0%, #7f8c8d 74%)",
            color: "white",
            border: "1px solid white",
        },
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <div className={classes.textContainer}>
                <div className={classes.text}>
                    <Typography variant='h2'>
                        Welcome to FitnessTracker
                    </Typography>
                    <Typography variant='h5'>
                        Find out what you are capable of and start your workout today!
                    </Typography>
                    <div>
                        <Link className={classes.routineButton} to="/routines">
                            Workout Routines<ArrowForwardIcon fontSize="large" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={classes.img} />
        </Paper>
    )
}

export default Home;