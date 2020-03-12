import { createAction } from '@reduxjs/toolkit';

/** 
 * Best explained by example:
 * nestedKeyString = 'key1/key2', val = 5 
 * generates the following object
 * {
 *    meta: { emit: true },
 *    payload: {
 *       key1: {
 *          key2: val  
 *       }
 *    }  
 * }
 */
const buildEmitActionObject = (nestedKeyString, val) => {
    let action = {
        meta: { emit: true },
        payload: {}
    };
    let nested = action['payload'];
    let nestedKeys = nestedKeyString.split('/');
    for (let i = 0; i < nestedKeys.length - 1; i++) {
        nested[nestedKeys[i]] = {};
        nested = nested[nestedKeys[i]];
    }
    nested[nestedKeys[nestedKeys.length - 1]] = val;
    return action;
}

/**
 * Returns an action creator that makes actions that can be intercepted by the socket middleware and emitted.
 * Takes a single string of keys seperated by slashes.
 * The payload of created actions will be a nested object with given keys
 */
export const createEmitAction = (nestedKeyString) =>
    createAction(nestedKeyString, newValue =>
        buildEmitActionObject(nestedKeyString, newValue)
    );