import React, { useContext, useEffect } from "react";
import { callApi } from "../../apiFunc";
import { UserContext } from "../../context/UserContext";
import {
<<<<<<< HEAD
=======
    Container,
    Typography,
    TextField,
    Grid,
    Card,
    CardHeader,
    CardContent,
>>>>>>> df2c2853be184c98e726655c33921885436e1258
    Button
} from "@material-ui/core";

const RoutineActions = () => {
    // goal is to make a new form route and then update it down below
    const {
        name,
        setName,
        goal,
        setGoal,
        isPublic,
        setIsPublic,
<<<<<<< HEAD
        token,
        setRoutines
    } = useContext(UserContext)

    const refetchRoutines = async () => {
        try {
            const response = await callApi({
                url: "/routines",
            });
            console.log(response);
            if (response) {
                setRoutines(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

=======
        routines,
        token,
        publicRoutines,
        user
    } = useContext(UserContext)

>>>>>>> df2c2853be184c98e726655c33921885436e1258
    const updateRoutine = async (routineId) => {
        try {
            const response = await callApi({
                url: `/routines/${routineId}`,
                method: "PATCH",
                body: {
                    name,
                    goal,
                    isPublic
                }
            })
            if (response) {
                console.log(response)
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    const deleteRoutine = async (routineId) => {
        try {
            const response = await callApi({
                url: `/routines/${routineId}`,
                method: "DELETE",
                token
            })
<<<<<<< HEAD
            await refetchRoutines();
=======
            await publicRoutines();
>>>>>>> df2c2853be184c98e726655c33921885436e1258
            if (response) {
                console.log(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
<<<<<<< HEAD
        refetchRoutines();
=======
        publicRoutines();
>>>>>>> df2c2853be184c98e726655c33921885436e1258
    }, []);

    return (
        <>
<<<<<<< HEAD
            <Button
                color="inherit"
                size="small"
            >Edit</Button>
            <Button
                color="secondary"
                size="small"
                onClick={() => deleteRoutine(routine.id)}
            >Delete</Button>
=======
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
>>>>>>> df2c2853be184c98e726655c33921885436e1258
        </>
    )
}

export default RoutineActions;