import React, { useContext, useContext } from "react";
import { callApi } from "../../apiFunc";
import { UserContext } from "../../context/UserContext"
import "./UserRoutines.css";

const UserRoutines = () => {
    const { token } = useContext(UserContext);

    return (
        <>

        </>
    )

}

export default UserRoutines;