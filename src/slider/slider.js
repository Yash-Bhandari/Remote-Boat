import React from 'react'
import Slider from '@material-ui/core/Slider';

const marks = [
    {
      value: 0,
      label: '0°'
    },
    {
      value: 45,
      label: '45°'
    },
    {
      value: 90,
      label: '90°'
    }
  ]

export default () => (
    <Slider
        defaultValue={0}
        min={0}
        max={90}
        valueLabelDisplay="auto"
        marks
    />
)