import React, { useState, useContext } from "react";
import { callApi } from "../../apiFunc";
import { UserContext } from "../../context/UserContext";
import { Button, TextField } from "@material-ui/core";
import "./Register.css";

const Register = () => {
    const { setToken } = useContext(UserContext);
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
            </form>
        </>
    )
};

export default Register;