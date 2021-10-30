import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    container: {
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        height: "500px",
        width: "500px",
        padding: "100px",
        backgroundColor: "white",
        borderRadius: "10px"
    },
    topSpacing: {
        marginTop: "25px"
    }
}));

export default useStyles;