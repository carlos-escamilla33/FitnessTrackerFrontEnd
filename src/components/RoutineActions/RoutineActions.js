import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { callApi } from "../../apiFunc";
import { UserContext } from "../../context/UserContext";
import {
    Button,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Container
} from "@material-ui/core";

const RoutineActions = () => {
    const {
        name,
        goal,
        isPublic,
        token,
        setRoutines,
        routines,
        user,
        publicRoutines
    } = useContext(UserContext);
    const history = useHistory();

    const deleteRoutine = async (routineId) => {
        try {
            const response = await callApi({
                url: `/routines/${routineId}`,
                method: "DELETE",
                token
            })
            await publicRoutines();
            if (response) {
                console.log(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        publicRoutines();
    }, []);

    return (
        <>
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
                                                    <Button
                                                        color="inherit"
                                                        size="small"
                                                        onClick={() => history.push(`/routines/${routine.id}`)}
                                                    >Edit</Button>
                                                    <Button
                                                        color="secondary"
                                                        size="small"
                                                        onClick={() => deleteRoutine(routine.id)}
                                                    >Delete</Button>
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
        </>
    )
}

export default RoutineActions;