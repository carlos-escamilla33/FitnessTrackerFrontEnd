import React, { useState, useContext } from "react";
import { callApi } from "../../api";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext.js";
import useStyles from "./StylesLoginRegister";
import { Button, Container, TextField, Link } from "@material-ui/core";

const LoginRegister = () => {
    const { setToken, setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { method } = useParams();
    const classes = useStyles();

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
            if (response.message === "you're logged in!") {
                setUser(response.user.username);
                if (response.token) {
                    localStorage.setItem("token", response.token);
                    localStorage.setItem("user", response.user.username);
                    setToken(response.token);
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
        <Container className={classes.container}>
            <form onSubmit={onSubmitHandler} className={classes.form}>

                {
                    method === "login" ?
                        <div className={classes.title}>
                            <h1>Login</h1>
                        </div>
                        :
                        <div className={classes.title}>
                            <h1>Register</h1>
                        </div>
                }
                <div>
                    <TextField
                        label="username"
                        required={true}
                        fullWidth={true}
                        id="outlined-basic"
                        variant="outlined"
                        value={username}
                        inputProps={{ minLength: 8 }}
                        onChange={usernameHandler}
                        type="text"
                    />
                </div>

                <div className={classes.topSpacing}>
                    <TextField
                        label="password"
                        required={true}
                        fullWidth={true}
                        id="outlined-basic"
                        variant="outlined"
                        value={password}
                        inputProps={{ minLength: 8 }}
                        onChange={passwordHandler}
                        type="password"
                    />
                </div>

                <div className={classes.topSpacing}>
                    <Button fullWidth={true} color="primary" variant="contained" type="submit">Submit</Button>
                </div>
                {
                    method === "login" ?
                        <div className={classes.topSpacing}>
                            <Link
                                underline="hover"
                                className={classes.link}
                                onClick={(event) => {
                                    event.preventDefault()
                                    history.push("/users/register")
                                }}
                            >
                                {'Dont have an account? Register here'}
                            </Link>
                        </div>
                        :
                        <div className={classes.topSpacing}>
                            <Link
                                underline="hover"
                                className={classes.link}
                                onClick={(event) => {
                                    event.preventDefault()
                                    history.push("/users/login")
                                }}
                            >
                                {'Already registered? Login here'}
                            </Link>
                        </div>
                }

            </form>
        </Container>
    )
}

export default LoginRegister;