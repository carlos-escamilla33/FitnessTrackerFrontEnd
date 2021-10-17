import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { callApi } from "../../apiFunc";
import PostRoutine from "../PostRoutine/PostRoutine";
import {
    Grid,
    Container,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button,
} from "@material-ui/core";

const Routines = () => {
    const { token, user, routines, publicRoutines } = useContext(UserContext)

    useEffect(() => {
        publicRoutines();
    }, [])

    return (
        <>
            <Container>
               <PostRoutine />
                <Grid container spacing={3}>
                    {
                        routines.reverse().map(routine => {
                            return (
                                <Grid item key={routine.id} xs={12} md={6} lg={4}>
                                    <div>
                                        <Card>
                                            <CardHeader
                                                title={routine.name}
                                                variant="h1"
                                                align="center"
                                                gutterbottom="true"
                                            />
                                            <CardContent align="center">
                                                <Typography

                                                    variant="overline"
                                                >
                                                    {routine.creatorName}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    gutterbottom="true"
                                                >
                                                    {routine.goal}
                                                </Typography>
                                            </CardContent>
                                            <Container
                                                container="true"
                                                justify="center"
                                                align="center"
                                            >
                                                {
                                                    routine.creatorName === user && token ?
                                                        <>
                                                            <Button color="inherit">Edit</Button>
                                                            <Button color="secondary">Delete</Button>
                                                        </>
                                                        : null
                                                }
                                                <Button color="primary">View Activities</Button>
                                            </Container>
                                        </Card>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container >
        </>
    )
}

export default Routines;