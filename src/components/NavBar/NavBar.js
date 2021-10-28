import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import useStyles from "./stylesNavBar.js";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery
} from "@material-ui/core";

const NavBar = () => {
    const { token, setToken, setUser, user } = useContext(UserContext);
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const logout = () => {
        setToken("");
        setUser("");
    }

    return (
        <AppBar position="static" className={classes.appBar}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo} component={Link} to={"/"}>
                    FitnessTracker
                </Typography>
                {
                    isMobile ?
                        <DrawerMenu />
                        :
                        <div>
                            <Link to="/" className={classes.link}>Home</Link>
                            <Link to="/routines" className={classes.link}>Routines</Link>
                            {
                                token.length > 1 ? <Link to={`/users/${user}/routines`} className={classes.link}>My Routines</Link> : null
                            }
                            <Link to="/activities" className={classes.link}>Activities</Link>
                            {
                                token.length > 1 ? <Link onClick={logout} to="/" className={classes.link}>Logout</Link>
                                    : <Link to="/users/login" className={classes.link}>Login/Register</Link>
                            }
                        </div>
                }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;