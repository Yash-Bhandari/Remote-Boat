import React from 'react';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'

const SliderField = ({ valueName, value, setValue, min, max }) => {
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
            <TextField
                id={valueName}
                label={valueName}
                value={value}
                type='number'
                onChange={e => setValue(e.target.value)} />
            <Slider
                value={value}
                min={min}
                max={max}
                onChange={(e, val) => setValue(val)}
                marks={marks} />
        </>
    )
}

export default SliderField