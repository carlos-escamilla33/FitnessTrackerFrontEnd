import React from "react";
import { useStyles } from "./StylesHome"

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.img}/>
            <div className={classes.title}>
            </div>
        </div>
    )
}

export default Home;