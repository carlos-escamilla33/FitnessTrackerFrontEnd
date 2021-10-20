import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import {
    Login,
    Register,
    UserData,
    NavBar,
    Home,
    Routines,
    Activities,
    UserRoutines,
    Footer
} from "./components";


const App = () => {

    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/users/login">
                    <Login />
                </Route>
                <Route path="/users/register">
                    <Register />
                </Route>
                <Route path="/users/me">
                    <UserData />
                </Route>
                <Route path="/users/:username/routines">
                    <UserRoutines />
                </Route>
                <Route path="/routines">
                    <Routines />
                </Route>
                <Route path="/activities">
                    <Activities />
                </Route>
            </Switch>
        </>
    )
}

export default App;