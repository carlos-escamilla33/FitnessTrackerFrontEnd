import { createContext, useState, useEffect } from "react";
import { callApi } from "../apiFunc";

const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");
    const [routines, setRoutines] = useState([]);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState("");

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

    useEffect(() => {
        publicRoutines();
    }, [routines]);

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
                name,
                setName,
                goal,
                setGoal,
                isPublic,
                setIsPublic
            }}
        >{children}</UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider
}
