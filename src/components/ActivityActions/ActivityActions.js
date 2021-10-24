import React, { useContext, useEffect, } from "react";
import { UserContext } from "../../context/UserContext";
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const ActivityActions = () => {
    const { activities, allActivities, token } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        allActivities()
    }, []);

    return (
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
                                        <Button
                                            color="inherit"
                                            size="small"
                                            onClick={() => history.push(`/activities/${activity.id}`)}
                                        >Edit</Button>
                                        :
                                        null
                                }
                            </Card>
                        </div>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ActivityActions;