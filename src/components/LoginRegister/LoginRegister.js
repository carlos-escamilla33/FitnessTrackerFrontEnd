import React, { useState, useContext } from "react";
import { callApi } from "../../apiFunc";
import { useHistory, Link, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext.js";
import { Button, TextField } from "@material-ui/core";

const LoginRegister = () => {
    const { setToken, setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { method } = useParams();

    const loginRegisterUser = async () => {
        try {

            const response = await callApi({
                url: `/users/${method}`,
                method: "POST",
                body: {
                    username,
                    password
                }
            })
            console.log(response);
            if (response.message === "you're logged in!") {
                setUser(response.user.username);
                setToken(response.token)
                if (response.token) {
                    history.push("/users/me");
                }
            } else if (response.message === "you're signed up!") {
                history.push("/users/login");
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

        loginRegisterUser();

        setUsername("");
        setPassword("");
    }


    return (
        <>
            <form onSubmit={onSubmitHandler}>

                {
                  method === "login" ? <h1>Login</h1> : <h1>Register</h1>
                }
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
                {
                    method === "login" ?
                        <div>
                            <h3>Dont have an account? Register down below</h3>
                            <Button
                                component={Link} to="/users/register"
                                color="primary"
                                variant="contained"
                                type="submit">Register</Button>
                        </div> : null
                }

            </form>
        </>
    )
}

export default LoginRegister;