import { combineReducers } from "@reduxjs/toolkit";
import { driverReducer } from "./driver";
import { socketMiddleware } from './socketMiddleware';

export const rootReducer = combineReducers({
    driver: driverReducer,
});

export {
    socketMiddleware
}