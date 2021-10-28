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
    },
    text: {
        position: "absolute",
        textAlign: "center",
        top: '20%',
        left: '25%',
        fontSize: "50px",
        color: "white"
    }
}));



export {
    useStyles,
}