import React, { useState, useEffect } from 'react';
import { sendControl } from '../utils/liason';
import SliderField from './SliderField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

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

const DirectController = ({ boatState, helmsman}) => {
    let [rudder, setRudder] = useState(boatState.rudder);
    let [sail, setSail] = useState(boatState.sail);

    const send = () => {
        sendControl(sail, rudder);
    }

    const reset = () => {
        console.log('resetting');
        setRudder(boatState.rudder);
        setSail(boatState.sail);
    }

    //Automatically changes rudder and sail values if helmsman is enabled
    useEffect(() => {
        if (helmsman.rudder_controller.enabled)
            setRudder(boatState.rudder);
        if (helmsman.sail_controller.enabled)
            setSail(boatState.sail)
    })

    // Disables sending controls when both helmsman controllers are enabled
    const disable_controls = (helmsman.rudder_controller.enabled && helmsman.sail_controller.enabled);
    const classes = useStyles();

    return (
        <ExpansionPanel className={classes.root}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h6'>Direct Control</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.control}>
                <SliderField
                    value={rudder}
                    valueName="Rudder Angle"
                    setValue={setRudder}
                    min={-45}
                    max={45}
                    disabled={helmsman.rudder_controller.enabled}
                />
                <SliderField
                    value={sail}
                    valueName="Sail Angle"
                    setValue={setSail}
                    min={0}
                    max={90}
                    disabled={helmsman.sail_controller.enabled}
                />
                <div className={classes.buttons}>
                    <Button style={buttonStyle} variant='contained' size='med' color='primary' onClick={reset} disabled={disable_controls}>
                        Reset
                </Button>
                    <Button style={buttonStyle} variant='contained' size='med' color='secondary' onClick={send} disabled={disable_controls}>
                        Send
                </Button>
                    <Button style={buttonStyle} variant='contained' size='med' color='primary' disabled={disable_controls}
                        onClick={() => {
                            setRudder(0);
                            setSail(0);
                            send()
                        }}>
                        Neutral
                </Button>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

const buttonStyle = {
    marginLeft: '2rem',
    marginRight: '2rem'
}

export default DirectController;