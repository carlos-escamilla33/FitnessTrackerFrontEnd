import { createContext, useState, useEffect } from "react";

const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken
            }}
        >{children}</UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider
}
