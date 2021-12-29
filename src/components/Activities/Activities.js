import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import PostActivity from "../PostActivity/PostActivity";
import useStyles from "./StylesActivities";
import activity from '../../media/activity.jpeg';
import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button,
    CardMedia
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

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
            <CardMedia
                className={classes.routineImage}
                image={activity}
            />
            <Grid container spacing={3}>
                {
                    activities.reverse().map(activity => (
                        <Grid item key={activity.id} xs={12} md={6} lg={4}>
                            <div>
                                <Card>
                                    <CardHeader
                                        title={activity.name}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary">
                                            {activity.description}
                                        </Typography>
                                    </CardContent>
                                    {
                                        token ?
                                            <>
                                                <Button
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => navigate.push(`/activities/${activity.id}`)}
                                                >Edit</Button>
                                            </>
                                            :
                                            null
                                    }
                                    <Button
                                        color="inherit"
                                        size="small"
                                        onClick={() => history.push(`/activity/${activity.id}/routines`)}
                                    >routines that feature activity</Button>
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