import React, { useEffect, useState } from "react";
import { callApi } from "../../apiFunc";
import "./Activities.css";
import {
    styled,
    Box,
    Paper,
    FitnessCenterIcon
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
            
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" className="separate">
                {
                    activities.map(activity => {
                        return (
                            <Box gridColumn="span 4" key={activity.id}>
                                <Item>
                                    <div><h3>{activity.name}</h3></div>
                                    {activity.description}
                                </Item>
                            </Box>
                        )
                    }) 
                }
            </Box>
        </>
    )
}

export default Activites;