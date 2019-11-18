import React from 'react';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider'
import { Typography } from '@material-ui/core';

const SliderField = ({ valueName, value, setValue, min, max, disabled }) => {
    const marks = [
        {
            value: min,
            label: min+'°'
        },
        {
            value: (max+min)/2,
            label: (max+min)/2 + '°'
        },
        {
            value: max,
            label: max + '°'
        },
    ]
    return (
        <>
            <Typography variant='h6'>{valueName}</Typography>
            <TextField
                id={valueName}
                value={value}
                type='number'
                onChange={e => setValue(e.target.value)} />
            <Slider
                value={value}
                min={min}
                max={max}
                onChange={(e, val) => setValue(val)}
                marks={marks}
                disabled={disabled} />
        </>
    )
}

export default SliderField