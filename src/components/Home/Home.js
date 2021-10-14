import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {useHistory} from "react-router-dom";

const Home = () => {
    const { token, user } = useContext(UserContext);
    const history = useHistory();

    console.log("------>TOKEN", token)
    console.log("------>USER",user);

    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}

export default Home;