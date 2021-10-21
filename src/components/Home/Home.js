import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useStyles } from "./StylesHome"
import { CssBaseline, useMediaQuery, useTheme, ImageList, ImageListItem } from "@material-ui/core";

const Home = () => {
    const { token, user } = useContext(UserContext);
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();

    console.log("------>TOKEN", token)
    console.log("------>USER", user);

    return (
        <div className={classes.img}>
            <CssBaseline />
        </div>
    )
}

export default Home;


// console.log(item.img)
// <ImageListItem key={item.img}>
//     <img
//     src={`${item.img}`}
//     loading="lazy"
//      />
// </ImageListItem>