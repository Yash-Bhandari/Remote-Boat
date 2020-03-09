import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Status = (boatState) => {
    const driver = useSelector(state => state.driver);
    return (
        <Grid container spacing={24} style={{ padding: 12 }}>
            {Object.keys(driver).map(
                prop =>
                    <Grid item xs={6} sm={4} lg={3} xl={3}>
                        <Info name={prop} value={driver[prop]} />
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