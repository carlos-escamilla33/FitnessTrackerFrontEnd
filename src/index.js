import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Login,
    Register
} from "./components";

const App = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");

    return (
        <>
            <Route path="/users/login">
                <Login setToken={setToken} setUser={setUser} />
            </Route>
            <Route path="/users/register">
                <Register setToken={setToken} />
            </Route>
        </>
    )
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app'),
);