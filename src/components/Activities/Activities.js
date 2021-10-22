import React from "react";
import PostActivity from "../PostActivity/PostActivity";
import ActivityActions from "../ActivityActions/ActivityActions"
import "./Activities.css";
import {
    Container,
} from "@material-ui/core";

const Activites = () => {
    return (
        <Container>
            <PostActivity />
            <ActivityActions />
        </Container>
    )
}

export default Activites;