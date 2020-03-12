import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux';

import { driverReducer } from './driver';
import { helmsmanReducer } from './helmsman'
import { socketMiddleware } from './socketMiddleware';

const socketURL = 'http://localhost:5001/clients';

const rootReducer = combineReducers({
    driver: driverReducer,
    helmsman: helmsmanReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [socketMiddleware(socketURL)]
})