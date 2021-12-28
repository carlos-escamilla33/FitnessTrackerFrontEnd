import {
    NavBar,
    Footer,
    LoginRegister,
    UserData,
    Home,
    Routines,
    Activities,
    UserRoutines,
    UpdateActivity,
    UpdateRoutine,
    ActivityRoutines
} from "./components";
import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";


const App = () => {
    const { setToken, setUser } = useContext(UserContext)
    useEffect(() => {
        const foundToken = localStorage.getItem("token");
        const foundUser = localStorage.getItem("user")
        if (foundToken) {
            setToken(foundToken);
            setUser(foundUser);
        }
    }, []);

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/users/me" element={<UserData />} />
                <Route exact path="/users/:username/routines" element={<UserRoutines />} />
                <Route path="/users/:method" element={<LoginRegister />} />
                <Route exact path="/routines" element={<Routines />} />
                <Route exact path="/routines/:routineId" element={<UpdateRoutine />} />
                <Route exact path="/activities" element={<Activities />} />
                <Route exact path="/activities/:activityId" element={<UpdateActivity />} />
                <Route exact path="/activity/:activityId/routines" element={<ActivityRoutines />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;