import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React, { useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import { Typography, TextField } from '@material-ui/core';
import { sendHelmsman } from '../utils/liason';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SliderField from './SliderField';

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    },
    control: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center'
    }
})

const HelmsmanController = ({ helmsman }) => {
    let [desired_heading, set_desired_heading] = useState(0);
    let [maximize_speed, set_maximize_speed] = useState(true);

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
        <ExpansionPanel className={classes.root}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h6'>Helmsman</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.control}>
                <div>
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
                </div>

                <Typography variant='subtitle1'>{'Desired Heading: ' + helmsman.desired_heading}</Typography>
                <div>
                    <Typography variant='subtitle1'>{'Speed:' + (helmsman.maximize_speed ? ' Maximized ' : ' Minimized')}</Typography>
                    <Switch
                        checked={maximize_speed}
                    />
                </div>

                <SliderField
                    value={desired_heading}
                    valueName="Desired Heading"
                    setValue={set_desired_heading}
                    min={0}
                    max={359}
                    disabled={!helmsman.rudder_controller.enabled}
                />

                <Button
                    disabled={!helmsman.rudder_controller.enabled}
                    variant='contained' size='med' color='secondary' onClick={update}>
                    Send
                </Button>

            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default HelmsmanController;