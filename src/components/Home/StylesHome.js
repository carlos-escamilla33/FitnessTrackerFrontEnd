import { makeStyles } from "@material-ui/core";
import gym from '../../media/gym.jpeg';

const useStyles = makeStyles(() => ({
    img: {
        minHeight: "80vh",
        backgroundImage: `url(${gym})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    container: {
        position: "relative",
        textAlign: "center"
    },
    text: {
        position: "absolute"
    }
}));



export {
    useStyles,
}