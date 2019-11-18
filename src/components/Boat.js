import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getStatus } from '../utils/liason';
import DirectController from './DirectController';
import Status from './Status';
import HelmsmanController from './HelmsmanController';
import Shutdown from './Shutdown';

const Boat = () => {
    let [status, setStatus] = useState({
        boat_state: {
            position: [0, 0],
            heading: 0,
            wind_dir: 0,
            rel_wind_dir: 0,
            wind_speed: 0,
            rudder: 0,
            sail: 0,
        },
        helmsman: {
            desired_heading: 0,
            enabled: false,
            rudder_controller: {
                enabled: false
            },
            sail_controller: {
                enabled: false
            }
        }
    })

    //Runs once on mounting. Gets boat status then sets interval to autoupdate
    useEffect(() => {
        getStatus().then(newState => setStatus(newState))
        const statusUpdater = window.setInterval(() => {
            getStatus().then(newState => setStatus(newState))
        }, 1000)

        return () => window.clearInterval(statusUpdater);
    }, [])

    return (
        <>
            <Status boatState={status.boat_state} />
            <hr/>
            <DirectController boatState={status.boat_state} helmsman={status.helmsman} />
            <HelmsmanController helmsman={status.helmsman} />
            <Shutdown />
        </>
    )
}

export default Boat