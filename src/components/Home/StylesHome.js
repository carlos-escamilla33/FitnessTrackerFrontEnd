import { makeStyles } from "@material-ui/core";
import couple from '../../media/workoutCouple.jpeg';
// import rope from "../../media/ropeWorkout.jpg";
// import dumbbell from "../../media/dumbbell.jpg";
// import groupYoga from "../../media/groupYoga.jpg";
// import pullUps from "../../media/pullUps.jpg";
// import pushUps from "../../media/pushups.jpg";
// import yoga from "../../media/yoga.jpg";
// import deadlift from "../../media/deadlift.jpg";

// const images = [
//     {
//         img: couple
//     },
//     {
//         img: rope
//     },
//     {
//         img: dumbbell
//     },
//     {
//         img: groupYoga
//     },
//     {
//         img: pushUps
//     },
//     {
//         img: pullUps
//     },
//     {
//         img: yoga
//     },
//     {
//         img: deadlift
//     },
// ]

const useStyles = makeStyles(() => ({
    img: {
        minHeight: "100vh",
        backgroundImage: `url(${couple})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    imgMain: {
        minHeight: "50vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
}));



export {
    useStyles,
    // images
}