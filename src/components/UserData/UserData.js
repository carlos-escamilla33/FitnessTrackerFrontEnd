import React, { useEffect, useState, useContext } from "react";
import { callApi } from "../../api";
import { UserContext } from "../../context/UserContext";

const UserData = () => {
    const { token, user } = useContext(UserContext);

    const personalData = async () => {
        try {
            const response = await callApi({
                url: "/users/me",
                token
            });
            console.log(response);
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
                    <>
                        <h1>Welcome</h1>
                        <h3>{user}</h3>
                    </> : null
            }
        </>
    )
}

export default UserData;