import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CssBaseline } from "@material-ui/core";
import { useStyles } from "./StylesHome"

const Home = () => {
    const { token, user } = useContext(UserContext);
    const classes = useStyles();

    console.log("------>TOKEN", token)
    console.log("------>USER", user);

    return (
        <div className={classes.container}>
            <div className={classes.img}/>
            <div className={classes.title}>
            </div>
        </div>
    )
}

export default Home;