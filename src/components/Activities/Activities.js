import React, { useEffect, useState } from "react";
import { callApi } from "../../apiFunc";
import "./Activities.css";
import {
    Grid,
    Container,
    Card,
    CardHeader,
    CardContent,
    Typography
} from "@material-ui/core";
import { Notes } from "@material-ui/icons";

const Activites = () => {
    const [activities, setActivities] = useState([]);

    const allActivities = async () => {
        try {
            const response = await callApi({
                url: "/activities",
            })
            console.log(response);
            if (response) {
                setActivities(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        allActivities();
    }, []);

    return (
        <Container>
            <Grid container spacing={3}>
                {
                    activities.map(activity => (
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
        </Container>
    )
}

export default Activites;