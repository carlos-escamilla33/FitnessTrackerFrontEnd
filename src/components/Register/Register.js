import React, { useState } from "react";
import { callApi } from "../../apiFunc";
import "./Register.css";

const Register = (props) => {
    const { setToken } = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userRegister = async () => {
        try {
            const response = await callApi({
                url: "/users/register",
                method: "POST",
                body: {
                    username,
                    password
                }
            });
            console.log(response)
            if (response) {
                setToken(response.data.token)
                if (response.data.token) {
                    setToken("");
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

    const submitHandler = (event) => {
        event.preventDefault(); //stops page from refreshing

        userRegister(); //function goes off to send information back to the api

        setUsername("") //onSubmit sets username to an empty string
        setPassword("") //onSubmit also sets the password to an empty string
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <h3>Register Page</h3>
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
};

export default Register;