import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import PostActivity from "./PostActivity";
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

// const useStyles = makeStyles(() => ({
// }))

const Activites = () => {
    const { activities, allActivities, token } = useContext(UserContext);
    const navigate = useNavigate();
    // const classes = useStyles();

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
                                                    onClick={() => navigate(`/activities/${activity.id}`)}
                                                >Edit</Button>
                                            </>
                                            :
                                            null
                                    }
                                    <Button
                                        color="inherit"
                                        size="small"
                                        onClick={() => navigate(`/activity/${activity.id}/routines`)}
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