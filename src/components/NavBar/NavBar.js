import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory, Link } from "react-router-dom";
import "./NavBar.css";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Container
} from "@material-ui/core";

const NavBar = () => {
    const { token, setToken, setUser, user } = useContext(UserContext);
    const history = useHistory();

    const style = {
        background: "black"
    }

    const myActivities = `/users/${user}/routines`;

    const logout = () => {
        setToken("");
        setUser("");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={style} position="static">
                <Container maxWidth="lg">
                    <Toolbar className="menuItems">
                        <Typography style={{ color: '#FFBF00' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            FitnessTracker
                        </Typography>
                        <div>
                            <Button component={Link} to="/" color="inherit">Home</Button>
                        </div>
                        <div>
                            <Button component={Link} to="/routines" color="inherit">Routines</Button>
                        </div>
                        {
                            token ?
                                <div>
                                    <Button component={Link} to={myActivities} color="inherit">My Activities</Button>
                                </div> : null
                        }
                        <div>
                            <Button component={Link} to="/activities" color="inherit">Activities</Button>
                        </div>
                        <div>
                            {
                                token.length > 1 ?
                                    <Button onClick={logout} component={Link} to="/" color="inherit">Logout</Button>
                                    :
                                    <Button component={Link} to="/users/login" color="inherit">Login/Register</Button>
                            }
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default NavBar;