import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const Status = () => {
    let [boatState, setBoatState] = useState({
        position: [1, 2],
        heading: 30,
        wind_dir: 200,
        rel_wind_dir: -170,
        wind_speed: 5,
        rudder: 0,
        sail: 40
    })

    return (
        <Grid container spacing={24} style={{ padding: 24 }}>
            {Object.keys(boatState).map(
                prop =>
                    <Grid item xs={6} sm={4} lg={3} xl={3}>
                        <Info name={prop} value={boatState[prop]} />
                    </Grid>
            )}
        </Grid>
    )
}

const Info = ({ name, value }) => (
    <CardContent>
        <Typography variant='subtitle1'>{name + ": " + value}</Typography>
    </CardContent>
)

export default Status;