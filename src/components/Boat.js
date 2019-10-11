import React, { useState, useEffect } from 'react';
import { getStatus } from '../utils/liason';
import Controller from './Controller';
import Status from './Status';

const Boat = () => {
    let [boatState, setBoatState] = useState({
        position: [0, 0],
        heading: 0,
        wind_dir: 0,
        rel_wind_dir: 0,
        wind_speed: 0,
        rudder: 0,
        sail: 0
    })

    useEffect(() => {
        const statusUpdater = window.setInterval(() => {
            getStatus().then(newState => setBoatState(newState));
        }, 1000)
    })

    return (
        <>
            <Status boatState={boatState}/>
            <Controller boatState={boatState}/>
        </>
    )
}

export default Boat