import React, { useState, useContext } from "react";
import { callApi } from "../../apiFunc";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext.js";
import { Button, TextField } from "@material-ui/core";
import "./Login.css";

const Login = () => {
    const { setToken, setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const loginUser = async () => {
        try {

            const response = await callApi({
                url: "/users/login",
                method: "POST",
                body: {
                    username,
                    password
                }
            })
            console.log(response);
            if (response) {
                setUser(username);
                setToken(response.token)
                if (response.token) {
                    history.push("/users/me");
                }
            }

        }
        catch (error) {
            console.log(error);
        }
    }

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        loginUser();

        setUsername("");
        setPassword("");
    }


    return (
        <>
            <form onSubmit={onSubmitHandler}>

                <h1>Login</h1>

                <div>
                    <TextField
                        label="username"
                        id="outlined-basic"
                        variant="outlined"
                        value={username}
                        onChange={usernameHandler}
                        type="text"
                    />
                </div>

                <div>
                    <TextField
                        label="password"
                        id="outlined-basic"
                        variant="outlined"
                        value={password}
                        onChange={passwordHandler}
                        type="password"
                    />
                </div>

                <div>
                    <Button color="primary" variant="contained" type="submit">Submit</Button>
                </div>

                <div>
                    <h3>Dont have an account? Register down below</h3>
                    <Button 
                    component={Link} to="/users/register" 
                    color="primary" 
                    variant="contained" 
                    type="submit">Register</Button>
                </div>

            </form>
        </>
    )
}

export default Login;