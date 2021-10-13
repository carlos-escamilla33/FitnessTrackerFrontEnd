import React, { useEffect, useState } from "react";
import { callApi } from "../../apiFunc";

const UserData = (props) => {
    const { token, user, setUser } = props;

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