import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography
} from "@material-ui/core";

const ActivityActions = () => {
    const { activities, allActivities } = useContext(UserContext);
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
                            </Card>
                        </div>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ActivityActions;