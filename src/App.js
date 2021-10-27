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
    Footer,
    UpdateActivity,
    UpdateRoutine,
    ActivityRoutines
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
                <Route exact path="/routines">
                    <Routines />
                </Route>
                <Route exact path="/routines/:routineId">
                    <UpdateRoutine />
                </Route>
                <Route exact path="/activities">
                    <Activities />
                </Route>
                <Route exact path="/activities/:activityId">
                    <UpdateActivity />
                </Route>
                <Route exact path="/activity/:activityId/routines">
                    <ActivityRoutines />
                </Route>
            </Switch>
        </>
    )
}

export default App;