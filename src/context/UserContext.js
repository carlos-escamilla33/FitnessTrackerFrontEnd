import { createContext, useState, useEffect } from "react";
import { callApi } from "../apiFunc";

const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);

    const publicRoutines = async () => {
        try {
            const response = await callApi({
                url: "/routines",
            });
            console.log(response);
            if (response) {
                setRoutines(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

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

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                routines,
                setRoutines,
                publicRoutines,
                activities,
                setActivities,
                allActivities
            }}
        >{children}</UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider
}
