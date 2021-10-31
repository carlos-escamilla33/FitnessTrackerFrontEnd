import React, { useEffect, useContext } from "react";
import { callApi } from "../../api";
import { UserContext } from "../../context/UserContext";
import useStyles from "./UserStyles";
import { Container } from "@material-ui/core"

const UserData = () => {
    const { token, user } = useContext(UserContext);
    const classes = useStyles();

    const personalData = async () => {
        try {
            const response = await callApi({
                url: "/users/me",
                token
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        personalData();
    }, [])

    return (
        <>
            {
                token ?
                    <Container className={classes.user}>
                        <h1>Welcome</h1>
                        <h3>{user}</h3>
                        <h3>You're logged in!</h3>
                    </Container> : null
            }
        </>
    )
}

export default UserData;