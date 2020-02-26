import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import React from 'react';
import { shutdown } from '../utils/liason';

const Shutdown = () => {
    const onClick = e => {
        if (window.confirm("Do you really want to shut down the boat?")) {
            shutdown();
        }
    }
    return (
        <Card >
            <Button variant='contained' color='secondary' size='med' onClick={onClick} style={{margin: '1rem'}}>
                Shutdown
            </Button>
        </Card>
    )
}

export default Shutdown