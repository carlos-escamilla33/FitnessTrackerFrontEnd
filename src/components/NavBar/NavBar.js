import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory, Link } from "react-router-dom";
import "./NavBar.css";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button
} from "@material-ui/core";

const NavBar = () => {
    const { token, setToken, setUser } = useContext(UserContext);

    const logout = () => {
        setToken("");
        setUser("");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="menuItems">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FitnessTracker
                    </Typography>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    <Button component={Link} to="/routines" color="inherit">Routines</Button>
                    <Button component={Link} to="/activities" color="inherit">Activities</Button>
                    {
                        token.length > 1 ?
                            <Button onClick={logout} component={Link} to="/" color="inherit">Logout</Button>
                            :
                            <Button component={Link} to="/users/login" color="inherit">Login/Register</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;