import { createSlice } from "@reduxjs/toolkit";

import { createEmitAction } from "./emitAction";

const helmsmanSlice = createSlice({
    name: 'helmsman',
    initialState: {
        rudder_controller_enabled: false,
        sail_controller_enabled: false,
        desired_heading: 0,
        maximize_speed: true
    },
    reducers: {
        update: (state, action) => action.payload
    }
})

const helmsmanActions = {
    ...helmsmanSlice.actions,
    setRudderControllerEnabled: createEmitAction('helmsman/rudder_controller_enabled'),
    setDesiredHeading: createEmitAction('helmsman/desired_heading'),
    setMaximizeSpeed: createEmitAction('helmsman/maximize_speed'),
    setSailControllerEnabled: createEmitAction('helmsman/sail_controller_enabled'),
};
const helmsmanReducer = helmsmanSlice.reducer;
export {
    helmsmanReducer,
    helmsmanActions
}

