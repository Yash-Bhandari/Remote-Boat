import React, { useState } from 'react';
import SliderField from './SliderField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const Controller = () => {
    let [rudder, setRudder] = useState(0);
    let [sail, setSail] = useState(0);

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
                <Button style={{marginRight: '2rem'}} variant='contained' size='med' color='primary'>
                    Reset
                </Button>
                <Button style={{marginLeft: '2rem'}} variant = 'contained' size='med' color='secondary'>
                    Send
                </Button>
            </CardActions>
        </Card>
    )
}

export default Controller;