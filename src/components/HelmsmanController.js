import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React from 'react';
import { sendHelmsman } from '../utils/liason';

const HelmsmanController = ({ helmsman }) => {

    const update = (controller_name, value) => {
        let to_send = { ...helmsman }
        to_send[controller_name]['enabled'] = value;
        sendHelmsman({ to_send })
    }

    return (
        <Card>
            <FormControlLabel
                control={
                    <Switch
                        checked={helmsman.rudder_controller.enabled}
                        value="rudder_controller_enabled"
                    />
                }
                label="Rudder Controller"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={helmsman.sail_controller.enabled}
                        value="sail_controller_enabled"
                        onChange={e=>update(e.target.checked)}
                    />
                }
                label="Sail Controller"
            />
        </Card>
    )
}

export default HelmsmanController;