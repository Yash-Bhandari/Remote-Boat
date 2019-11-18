import React, { useState, useEffect } from 'react';
import { sendControl } from '../utils/liason';
import SliderField from './SliderField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const DirectController = ({ boatState, helmsman }) => {
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
    useEffect(() =>{
        if (helmsman.rudder_controller.enabled)
            setRudder(boatState.rudder);
        if (helmsman.sail_controller.enabled)
            setSail(boatState.sail)
    })

    // Disables sending controls when both helmsman controllers are enabled
    const disable_controls = (helmsman.rudder_controller.enabled && helmsman.sail_controller.enabled);

    return (
        <Card style={{ padding: '1rem' }}>
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
            <CardActions style={{ justifyContent: 'center' }}>
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

            </CardActions>
        </Card>
    )
}

const buttonStyle = {
    marginLeft: '2rem',
    marginRight: '2rem'
}

export default DirectController;