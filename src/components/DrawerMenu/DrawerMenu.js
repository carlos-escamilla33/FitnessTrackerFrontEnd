import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from "react-router-dom";
import useStyles from './stylesDrawerMenu';
import MenuIcon from "@material-ui/icons/Menu"
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Divider
} from "@material-ui/core";

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
            <Drawer open={openDrawer} onClose={updateDrawer} classes={{paper: classes.paper}}>
                <List>
                    <ListItem onClick={updateDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={updateDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/routines">Routines</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
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
                    <Divider />
                    {
                        token.length > 1 ?
                            <>
                            <ListItem onClick={closeLogoutDrawer}>
                                <ListItemText>
                                    <Link className={classes.link} to="/">Logout</Link>
                                </ListItemText>
                            </ListItem>
                            <Divider />
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
                <MenuIcon className={classes.icon}/>
            </IconButton>
        </>
    )
}

export default DrawerMenu;