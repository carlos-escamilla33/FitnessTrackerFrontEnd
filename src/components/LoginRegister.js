import React, { useState, useContext } from "react";
import { callApi } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext.js";
import { Button, Container, TextField, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    link: {
        cursor: "pointer",
    },
    title: {
        textAlign: "center",
        fontWeight: 900,
        color: "white",
        margin: "10px"
    },
    form : {
        height: "600px",
        width: "600px",
        border: "2px solid white",
        padding: "100px",
        color: "white",
        borderRadius: "10px"
    },
    topSpacing: {
        marginTop: "25px",
    }
}))

const LoginRegister = () => {
    const { setToken, setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
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
                    navigate("/");
                }
            } else if (response.message === "you're signed up!") {
                navigate("/users/login");
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
        <Container container="true"
            style={{
                minHeight: "75vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <form onSubmit={onSubmitHandler} className={classes.form}>

                {
                    method === "login" ?
                        <div className={classes.title}>
                            <Typography variant="h2">Login</Typography>
                        </div>
                        :
                        <div className={classes.title}>
                            <Typography variant="h2">Register</Typography>
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
                                    navigate("/users/register")
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
                                    navigate("/users/login")
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