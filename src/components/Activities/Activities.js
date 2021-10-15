import React, { useEffect, useState } from "react";
import { callApi } from "../../apiFunc";
import "./Activities.css";

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
                        <div key={activity.id}>
                            <h3>{activity.name}</h3>
                            <p>{activity.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Activites;