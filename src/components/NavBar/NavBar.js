import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory, Link } from "react-router-dom";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button
} from "@material-ui/core";

const NavBar = () => {
    const { token, setToken, user } = useContext(UserContext);

    const logout = () => {
        setToken("");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FitnessTracker
                    </Typography>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    {
                        token.length > 1 ? 
                        <Button onClick={logout}component={Link} to="/" color="inherit">Logout</Button> 
                        :
                        <Button component={Link} to="/users/login" color="inherit">Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;