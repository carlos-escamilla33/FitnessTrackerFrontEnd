import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import {
    Login,
    Register,
    UserData
} from "./components";

const App = () => {

    return (
        <>
            <Route path="/users/login">
                <Login />
            </Route>
            <Route path="/users/register">
                <Register />
            </Route>
            <Route path="/users/me">
                <UserData />
            </Route>
        </>
    )
}

ReactDOM.render(
    <Router>
        <UserProvider>
            <App />
        </UserProvider>
    </Router>,
    document.getElementById('app'),
);