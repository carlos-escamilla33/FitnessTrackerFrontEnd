import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import {
    AppBar,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "black",
        padding: "25px",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        color: 'white',
        textDecoration: "none",
        fontFamily: [
            'Montserrat',
            "sans-serif"
        ].join(","),
        fontSize: "43px"
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "25px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            color: '#FFBF00',
            borderBottom: "1px solid white",
        },
        fontFamily: [
            'Work Sans',
            "sans-serif"
        ].join(",")
    },
}))

const NavBar = () => {
    const { token, setToken, setUser, user } = useContext(UserContext);
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const logout = () => {
        localStorage.removeItem("token")
        setToken("");
        setUser("");
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.appBar}>
                <Typography variant="h4" className={classes.logo} component={Link} to={"/"}>
                    FitnessTracker
                </Typography>
                {
                    isMobile ?
                        <DrawerMenu />
                        :
                        <div className={classes.navLinks}>
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