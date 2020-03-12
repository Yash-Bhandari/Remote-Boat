import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { helmsmanActions as ha } from '../redux/helmsman';
import { sendHelmsman } from '../utils/liason';
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

const HelmsmanController = () => {
    const helmsman = useSelector(state => state.helmsman);
    const dispatch = useDispatch();
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
        <ExpansionPanel className={classes.root}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h6'>Helmsman</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.control}>
                <div>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={helmsman.rudder_controller_enabled}
                                onChange={e => dispatch(ha.setRudderControllerEnabled(e.target.checked))}
                                value="checkedA"
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                            />}
                        label="Rudder Controller Enabled"
                        labelPlacement="top"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={helmsman.sail_controller_enabled}
                                onChange={e => dispatch(ha.setSailControllerEnabled(e.target.checked))}
                                value="checkedA"
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                            />
                        }
                        label="Sail Controller Enabled"
                        labelPlacement="top"
                    />
                </div>

                <Typography variant='subtitle1'>{'Desired Heading: ' + helmsman.desired_heading}</Typography>
                <Typography variant='subtitle1'>{'Speed:' + (helmsman.maximize_speed ? ' Maximized ' : ' Minimized')}</Typography>

                <FormControlLabel
                    control={
                        <Switch
                            checked={maximize_speed}
                            value="maximize_speed"
                            onChange={e => update('sail_controller', { maximize_speed: e.target.checked })}
                        />
                    }
                    label="Maximize Speed"
                    labelPlacement='start'
                />

                <SliderField
                    value={desired_heading}
                    valueName="Desired Heading"
                    setValue={set_desired_heading}
                    min={0}
                    max={359}
                    disabled={!helmsman.rudder_controller_enabled}
                />

                <Button
                    disabled={!helmsman.rudder_controller_enabled}
                    variant='contained' size='med' color='secondary' onClick={update}>
                    Send
                </Button>

            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default HelmsmanController;