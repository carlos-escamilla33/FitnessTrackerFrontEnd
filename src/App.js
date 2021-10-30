import { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css"
import {
    LoginRegister,
    UserData,
    NavBar,
    Home,
    Routines,
    Activities,
    UserRoutines,
    UpdateActivity,
    UpdateRoutine,
    ActivityRoutines
} from "./components";
import { UserContext } from "./context/UserContext";


const App = () => {
    const { setToken, setUser } = useContext(UserContext)
    useEffect(() => {
        const foundToken = localStorage.getItem("token");
        const foundUser = localStorage.getItem("user")
        if (foundToken) {
            setToken(foundToken);
            setUser(foundUser);
        }
    }, []);

    return (
        <div className="content">
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
        </div>
    )
}

export default App;