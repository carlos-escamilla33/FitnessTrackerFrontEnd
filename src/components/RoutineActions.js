import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { callApi } from "../api";
import { UserContext } from "../context/UserContext";
import {
    Button,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Container,
    TextField,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    textContainer: {
        margin: "50px",
    },
    resize: {
        fontSize: 30
    },
    customTextField: {
        "& input::placeholder": {
            fontSize: "20px"
        }
    }
}))

const RoutineActions = () => {
    const {
        token,
        routines,
        user,
        publicRoutines
    } = useContext(UserContext);
    const navigate = useNavigate();
    const classes = useStyles()
    const [searchTerm, setSearchTerm] = useState("")
    const postMatches = (post, text) => post.includes(text)
    const filteredPosts = routines.filter(post => postMatches(post.name.toLowerCase(), searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : routines;

    const deleteRoutine = async (routineId) => {
        try {
            const response = await callApi({
                url: `/routines/${routineId}`,
                method: "DELETE",
                token
            })
            await publicRoutines();
        }
        catch (error) {
            console.log(error);
        }
    }

    const searchHandler = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        publicRoutines();
    }, []);

    return (
        <>
            <div className={classes.textContainer}>
                <TextField
                    helperText={"Search for your routine or explore others"}
                    autoFocus={true}
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                    className={classes.customTextField}
                    style={{ width: "500px" }}
                    label={<span style={{ fontSize: '1.8rem' }}>Search For A Routine</span>}
                    id="outlined-basic"
                    variant="outlined"
                    value={searchTerm}
                    onChange={searchHandler}
                    type="text" />
            </div>
            <Grid container spacing={3}>

                {
                    postsToDisplay.map(routine => {
                        return (
                            <Grid item key={routine.id} xs={12} md={6} lg={6}>
                                <Card>
                                    <CardHeader
                                        title={routine.name}
                                        variant="h1"
                                        align="center"
                                        gutterbottom="true"
                                    />
                                    <CardContent align="center">
                                        <Typography

                                            variant="overline"
                                        >
                                            {routine.creatorName}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            gutterbottom="true"
                                        >
                                            Goal: {routine.goal}
                                        </Typography>
                                    </CardContent>
                                    <Container
                                        container="true"
                                        justify="center"
                                        align="center"
                                    >
                                        {
                                            routine.creatorName === user && token ?
                                                <>
                                                    <Button
                                                        color="inherit"
                                                        size="small"
                                                        onClick={() => navigate(`/routines/${routine.id}`)}
                                                    >Edit</Button>
                                                    <Button
                                                        color="secondary"
                                                        size="small"
                                                        onClick={() => deleteRoutine(routine.id)}
                                                    >Delete</Button>
                                                </>
                                                : <></>
                                        }
                                    </Container>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default RoutineActions;