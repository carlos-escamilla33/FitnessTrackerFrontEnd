import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {useHistory} from "react-router-dom";

const Home = () => {
    const { token, user } = useContext(UserContext);
    const history = useHistory();

    return (
        <>
            <h1>Home Page</h1>
            {
                token && user.length < 1 ? null : history.push("/")
            }
        </>
    )
}

export default Home;