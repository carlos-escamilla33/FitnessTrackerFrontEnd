import { makeStyles } from "@material-ui/core";
import gym from '../../media/gym.jpeg';

const useStyles = makeStyles(() => ({
    img: {
        minHeight: "100vh",
        backgroundImage: `url(${gym})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
}));



export {
    useStyles,
}