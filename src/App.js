import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import {
    LoginRegister,
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
                <Route exact path="/users/me">
                    <UserData />
                </Route>
                <Route exact path="/users/:username/routines">
                    <UserRoutines />
                </Route>
                <Route path="/users/:method">
                    <LoginRegister />
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
            <Footer />
        </>
    )
}

export default App;