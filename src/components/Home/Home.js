import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import workout from '../../media/workoutCouple.jpeg';
import "./Home.css"

const Home = () => {
    const { token, user } = useContext(UserContext);
    const history = useHistory();

    console.log("------>TOKEN", token)
    console.log("------>USER", user);

    return (
        <div className="imgbox">
            <img src={workout} className="center-fit" />
        </div>
    )
}

export default Home;