import React, { useState } from "react";
import { callApi } from "../../apiFunc";
import { useHistory } from"react-router-dom";
import "./Login.css";

const Login = (props) => {
    const { setToken, setUser } = props;
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
                    <input
                        placeholder="username"
                        value={username}
                        onChange={usernameHandler}
                        type="text"
                    />
                </div>

                <div>
                    <input
                        placeholder="password"
                        value={password}
                        onChange={passwordHandler}
                        type="password"
                    />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </>
    )
}

export default Login;