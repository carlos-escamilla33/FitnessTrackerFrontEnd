import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import PostActivity from "./PostActivity";
import EditIcon from '@mui/icons-material/Edit';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    card: {
        border: "1px solid white",
        backgroundColor: "black",
        color: "white",
        textAlign: "center"
    },
    activityButtons: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px"
    }
}))

const Activites = () => {
    const { activities, allActivities, token } = useContext(UserContext);
    const navigate = useNavigate();
    const classes = useStyles();

    useEffect(() => {
        allActivities();
    }, []);
    return (
        <Container container="true">
            <PostActivity />
            <Grid container spacing={3}>
                {
                    activities.reverse().map(activity => (
                        <Grid item key={activity.id} xs={12} md={6} lg={4}>
                            <div>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title={activity.name}
                                    />
                                    <CardContent>
                                        <Typography variant="body2">
                                            <SportsBasketballOutlinedIcon /><br />
                                            Description: {activity.description}
                                        </Typography>
                                    </CardContent>
                                    <div className={classes.activityButtons}>
                                        {
                                            token ?
                                                <>
                                                    <Button
                                                        color="inherit"
                                                        variant="outlined"
                                                        startIcon={<EditIcon />}
                                                        size="small"
                                                        onClick={() => navigate(`/activities/${activity.id}`)}
                                                    >Edit</Button>
                                                </>
                                                :
                                                null
                                        }
                                        <Button
                                            color="inherit"
                                            variant="outlined"
                                            style={{color: "yellow"}}
                                            size="small"
                                            onClick={() => navigate(`/activity/${activity.id}/routines`)}
                                        >routines that feature activity</Button>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Activites;