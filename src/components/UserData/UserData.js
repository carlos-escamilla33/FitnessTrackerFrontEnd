import React, { useEffect, useState, useContext } from "react";
import { callApi } from "../../apiFunc";
import {UserContext} from "../../context/UserContext";

const UserData = () => {
    const { token, user, setUser } = useContext(UserContext);

    const personalData = async () => {
        try {
            const response = await callApi({
                url: "/users/me",
                token
            });
            console.log(response);
            setUser(response.username);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        personalData();
    },[])

    return (
        <>
            <h1>Welcome</h1>
            <h3>{user}</h3>
        </>
    )
}

export default UserData;