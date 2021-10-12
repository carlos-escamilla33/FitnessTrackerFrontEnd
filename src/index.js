import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Login
} from "./components";

const App = () => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");

    return (
        <>
            <Route>
                <Login />
            </Route>
        </>
    )
}

ReactDOM.render(
    <Router exact path="/users/login">
        <App setToken={setToken} setUser={setUser} />
    </Router>,
    document.getElementById('app'),
);