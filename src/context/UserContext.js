import { createContext, useState } from "react";
import { callApi } from "../api";

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
