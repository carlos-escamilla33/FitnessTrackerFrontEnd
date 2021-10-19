// import React, { useState, useEffect, useContext, useParams } from "react";
// import { callApi } from "../../apiFunc";
// import { UserContext } from "../../context/UserContext";
// import {
//     Container,
//     Typography,
//     TextField
// } from "@material-ui/core";


// const UpdateRoutine = () => {
//     const { routineId } = useParams();
//     const { publicRoutines } = useContext(UserContext);
//     const [name, setName] = useState("");
//     const [goal, setGoal] = useState("");
//     const [isPublic, setIsPublic] = useState(true);

//     const updateRoutine = async () => {
//         try {
//             const response = await callApi({
//                 url: `/routines/${routineId}`,
//                 method: "PATCH",
//                 body: {
//                     name,
//                     goal,
//                     isPublic
//                 }
//             })
//             await publicRoutines();
//             if (response) {
//                 console.log(response);
//             }
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }

//     const submitHandler = (event) => {
//         event.preventDefault();

//         updateRoutine();

//         setName("");
//         setGoal("");
//         setIsPublic(true);
//     }

//     return (
//         <Container>
//             <form onSubmit={submitHandler}>
//                 <TextField label="name" />
//                 <TextField />
//             </form>
//         </Container>
//     )
// }

// export default UpdateRoutine;