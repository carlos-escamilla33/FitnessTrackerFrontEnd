import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    listContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        height: '100vh'
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        background: "#000000",
    },
    link: {
        textDecoration: "none",
        color: '#FFFFFF',
        fontSize: "40px",
        "&:hover": {
            color: "#FFBF00",
            borderBottom: "1px solid white",
        },
        margin: "20px"
    },
    icon: {
        color: "#FFFFFF",
    }
}));

const DrawerMenu = () => {
    const { user, token, setToken, setUser } = useContext(UserContext);
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles();

    const logOut = () => {
        localStorage.removeItem("token");
        setToken("");
        setUser("");
    }

    const closeLogoutDrawer = (event) => {
        event.preventDefault();

        logOut();
        setOpenDrawer(false);
    }

    const updateDrawer = (event) => {
        event.preventDefault();

        setOpenDrawer(false)
    }

    return (
        <>
            <Drawer open={openDrawer} onClose={updateDrawer} classes={{ paper: classes.paper }}>
                <List className={classes.listContainer}>
                    <ListItem onClick={updateDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={updateDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/routines">Routines</Link>
                        </ListItemText>
                    </ListItem>
                    {
                        token.length > 1 ?
                            <ListItem onClick={updateDrawer}>
                                <ListItemText>
                                    <Link className={classes.link} to={`/users/${user}/routines`}>My Routines</Link>
                                </ListItemText>
                            </ListItem> : null
                    }
                    <ListItem onClick={updateDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/activities">Activities</Link>
                        </ListItemText>
                    </ListItem>
                    {
                        token.length > 1 ?
                            <>
                                <ListItem onClick={closeLogoutDrawer}>
                                    <ListItemText>
                                        <Link className={classes.link} to="/">Logout</Link>
                                    </ListItemText>
                                </ListItem>
                            </>
                            :
                            <>
                                <ListItem onClick={updateDrawer}>
                                    <ListItemText>
                                        <Link className={classes.link} to="/users/login">Login/Register</Link>
                                    </ListItemText>
                                </ListItem>
                            </>
                    }
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
        </>
    )
}

export default DrawerMenu;