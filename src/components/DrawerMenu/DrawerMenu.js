import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu"
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton
} from "@material-ui/core";

const DrawerMenu = () => {
    const { user, token } = useContext(UserContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    const updateDrawer = (event) => {
        event.preventDefault();

        setOpenDrawer(false)
    }

    return (
        <>
            <Drawer open={openDrawer} onClose={updateDrawer}>
                <List>
                    <ListItem onClick={updateDrawer}>
                        <ListItemText>
                            <Link to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={updateDrawer}>
                        <ListItemText>
                            <Link to="/routines">Routines</Link>
                        </ListItemText>
                    </ListItem>
                    {
                        token.length > 1 ?
                            <ListItem onClick={updateDrawer}>
                                <ListItemText>
                                    <Link to={`/users/${user}/routines`}>Routines</Link>
                                </ListItemText>
                            </ListItem> : null
                    }
                    <ListItem onClick={updateDrawer}>
                        <ListItemText>
                            <Link to="/activities">Activities</Link>
                        </ListItemText>
                    </ListItem>
                    {
                        token.length > 1 ?
                            <ListItem onClick={updateDrawer}>
                                <ListItemText>
                                    <Link to="/">Logout</Link>
                                </ListItemText>
                            </ListItem>
                            :
                            <ListItem onClick={updateDrawer}>
                                <ListItemText>
                                    <Link to="/users/login">Login/Register</Link>
                                </ListItemText>
                            </ListItem>
                    }
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerMenu;