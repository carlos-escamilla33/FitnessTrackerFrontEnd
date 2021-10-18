import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import PostRoutine from "../PostRoutine/PostRoutine";
<<<<<<< HEAD
import { callApi } from "../../apiFunc";
import RoutineActions from "../RoutineActions/RoutineActions";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Button
} from "@material-ui/core";

const Routines = () => {
    const { token, user, routines } = useContext(UserContext)
=======
import RoutineActions from "../RoutineActions/RoutineActions";
import {
    Grid,
    Container
} from "@material-ui/core";

const Routines = () => {
    const {
        publicRoutines,
    } = useContext(UserContext);

    useEffect(() => {
        publicRoutines();
    }, [])
>>>>>>> df2c2853be184c98e726655c33921885436e1258

    return (
        <>
            <Container>
                <PostRoutine />
                <Grid container spacing={3}>
<<<<<<< HEAD
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
                                                        <RoutineActions />
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
=======
                    <RoutineActions />
>>>>>>> df2c2853be184c98e726655c33921885436e1258
                </Grid>
            </Container >
        </>
    )
}

export default Routines;