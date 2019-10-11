import React, { useState } from 'react';
import { sendRudder, sendSail } from '../utils/liason';
import SliderField from './SliderField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const Controller = ( {boatState} ) => {
    let [rudder, setRudder] = useState(boatState.rudder);
    let [sail, setSail] = useState(boatState.sail);

    const send = () => {
        sendSail(sail);
        sendRudder(rudder);
    }

    const reset = () => {
        console.log('resetting');
        setRudder(boatState.rudder);
        setSail(boatState.sail);
    }

    return (
        <Card style={{padding: '1rem'}}>
            <SliderField
                value={rudder}
                valueName="Rudder Angle"
                setValue={setRudder}
                min={-45}
                max={45}
            />
            <SliderField
                value={sail}
                valueName="Sail Angle"
                setValue={setSail}
                min={0}
                max={90}
            />
            <CardActions style={{justifyContent: 'center'}}>
                <Button style={{marginRight: '2rem'}} variant='contained' size='med' color='primary' onClick={reset}>
                    Reset
                </Button>
                <Button style={{marginLeft: '2rem'}} variant = 'contained' size='med' color='secondary' onClick={send}>
                    Send
                </Button>
            </CardActions>
        </Card>
    )
}

export default Controller;