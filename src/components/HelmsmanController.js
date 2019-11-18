import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React, { useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import { Typography, TextField } from '@material-ui/core';
import { sendHelmsman } from '../utils/liason';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        margin: '0 2rem 0 2rem'
    }
})

const HelmsmanController = ({ helmsman }) => {
    let [desired_heading, set_desired_heading] = useState(0);
    let [maximize_speed, set_maximize_speed] = useState(false);

    const update = (key, value) => {
        let to_send = {
            ...helmsman,
            desired_heading,
            maximize_speed
        };
        if (key && value)
            to_send[key] = value;
        sendHelmsman(to_send);
    }

    const classes = useStyles();

    return (
        <Card>
            <FormControlLabel
                control={
                    <Switch
                        checked={helmsman.rudder_controller.enabled}
                        value="rudder_controller_enabled"
                        onChange={e => update('rudder_controller', { enabled: e.target.checked })}
                    />
                }
                label="Rudder Controller"
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={helmsman.sail_controller.enabled}
                        value="sail_controller_enabled"
                        onChange={e => update('sail_controller', { enabled: e.target.checked })}
                    />
                }
                label="Sail Controller"
            />

            <CardContent>
                <Typography variant='subtitle1'>{'Desired Heading: ' + helmsman.desired_heading}</Typography>
                <Typography variant='subtitle1'>{'Speed:' + (helmsman.maximize_speed ? ' Maximized ' : ' Minimized')}</Typography>
            </CardContent>

            <TextField
                value={desired_heading}
                onChange={e => set_desired_heading(e.target.value)}
                disabled={!helmsman.rudder_controller.enabled}
                type='number'
            />

            <Button 
                className={classes.button} disabled={!helmsman.rudder_controller.enabled}
                variant='contained' size='med' color='secondary' onClick={update}>
                Set Desired Heading
            </Button>

            <Switch
                checked={maximize_speed}
                />

        </Card>
    )
}

export default HelmsmanController;