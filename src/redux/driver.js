import { createAction, createSlice } from '@reduxjs/toolkit'

const driverSlice = createSlice({
    name: 'driver',
    initialState: {
        sail: 0,
        rudder: 0,
        wind_speed: 0,
        wind_direction: 0
    },
    reducers: {
        update: (state, action) => action.payload
    }
})

const setRudder = createAction('driver/rudder', newAngle => ({
    meta: { emit: true },
    payload: {
        driver: {
            rudder: newAngle
        }
    }
}))

const setSail = createAction('driver/sail', newAngle => ({
    meta: { emit: true },
    payload: {
        driver: {
            sail: newAngle
        }
    }
}))

const driverReducer = driverSlice.reducer;
const driverActions = {...driverSlice.actions, setRudder, setSail};

export {
    driverReducer,
    driverActions
}