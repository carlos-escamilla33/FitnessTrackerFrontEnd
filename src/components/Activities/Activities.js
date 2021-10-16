import React, { useEffect, useState } from "react";
import { callApi } from "../../apiFunc";
import "./Activities.css";
import {
    styled,
    Box,
    Paper,
    Grid
} from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
        <>
            {
                activities.map(activity => {
                    return (
                        <Box sx={{ flexGrow: 1 }} key={activity.id}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={8}>
                                    <Item>
                                        <div>
                                            <h3> {activity.name}</h3>
                                        </div>
                                        <div>
                                            {activity.description}
                                        </div>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                })
            }
        </>
    )
}

export default Activites;