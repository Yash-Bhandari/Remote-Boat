import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core';

const FormUserDetails = ({ nextStep, handleChange, values }) => {
    const next = e => {
        e.preventDefault();

    }
    return (
        <div>
            <AppBar title='Enter User Details' position='static'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='title' color='inherit'>
                        Remote Boat
                    </Typography>
                </Toolbar>
            </AppBar>
            <TextField
                id='firstName'
                label='First Name'
                onChange={handleChange('firstName')}
                value={values.firstName}
            />
        </div>
    )
}

export default FormUserDetails;