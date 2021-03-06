import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { callApi } from "../api";
import { UserContext } from "../context/UserContext";
import PostRoutine from "./PostRoutine";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
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
    textBox: {
        fontSize: 30,
        color: "white",
        backgroundColor: "black",
        borderRadius: "10px",
        padding: "10px",
        border: "1px solid white",
        "& input::placeholder": {
            fontSize: "20px",
            color: "white",
        },
    },
    routineButtons: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px"
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
            <span><PostRoutine /></span>
            <div className={classes.textContainer}>
                <TextField
                    autoFocus={true}
                    InputProps={{
                        classes: {
                            input: classes.textBox,
                        },
                    }}
                    placeholder={"Filter Routines"}
                    id="standard-basic"
                    variant="standard"
                    value={searchTerm}
                    onChange={searchHandler}
                    type="text" />
            </div>
            <Grid container spacing={3}>

                {
                    postsToDisplay.reverse().map(routine => {
                        return (
                            <Grid item key={routine.id} xs={12} md={6} lg={6}>
                                <Card  style={{color: "white", backgroundColor: "black", border: "1px solid white"}}>
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
                                            <FaceOutlinedIcon /><br />Routine Creator: {routine.creatorName}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            gutterbottom="true"
                                        >
                                            <EmojiFlagsOutlinedIcon /><br/>Goal: {routine.goal}
                                        </Typography>
                                    </CardContent>
                                    <Container
                                        container="true"
                                        justify="center"
                                        align="center"
                                    >
                                        {
                                            routine.creatorName === user && token ?
                                                <div className={classes.routineButtons}>
                                                    <Button
                                                        variant="outlined"
                                                        color="inherit"
                                                        startIcon={<EditIcon />}
                                                        size="small"
                                                        onClick={() => navigate(`/routines/${routine.id}`)}
                                                    >Edit</Button>
                                                    <Button
                                                        variant="outlined"
                                                        color="secondary"
                                                        size="small"
                                                        startIcon={<DeleteIcon />}
                                                        onClick={() => deleteRoutine(routine.id)}
                                                    >Delete</Button>
                                                </div>
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