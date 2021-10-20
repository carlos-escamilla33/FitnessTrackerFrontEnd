import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import useStyles from "./stylesNavBar.js";
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    Button,
    Container,
} from "@material-ui/core";

const NavBar = () => {
    const { token, setToken, setUser, user } = useContext(UserContext);
    const classes = useStyles();

    const style = {
        background: "black"
    }

    const myRoutines = `/users/${user}/routines`;

    const logout = () => {
        setToken("");
        setUser("");
    }

    return (
        <AppBar position="static" className={classes.appBar}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    FitnessTracker
                </Typography>
                <div>
                    <Link to="/" className={classes.link}>Home</Link>
                    <Link to="/routines" className={classes.link}>Routines</Link>
                    {
                        token.length > 1 ? <Link to={myRoutines} className={classes.link}>My Routines</Link> : null
                    }
                    <Link to="/activities" className={classes.link}>Activities</Link>
                    {
                        token.length > 1 ? <Link onClick={logout} to="/" className={classes.link}>Logout</Link>
                            : <Link to="/users/login" className={classes.link}>Login/Register</Link>
                    }
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;