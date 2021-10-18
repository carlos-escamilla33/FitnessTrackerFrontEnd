import { createContext, useState, useEffect, useRef } from "react";
import { callApi } from "../apiFunc";

const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");
    const [routines, setRoutines] = useState([]);
    const isInitialMount = useRef(true)

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
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                routines,
                setRoutines,
                publicRoutines
            }}
        >{children}</UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider
}
