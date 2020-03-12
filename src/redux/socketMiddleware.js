import io from 'socket.io-client';

import { driverActions } from './driver';
import { helmsmanActions } from './helmsman';

export const socketMiddleware = (url) => {
    const socket = io(url);

    return ({ dispatch }) => {
        // Sets up listener for data recieved from boat
        socket.on('boat_data', boat_data => {
            console.log('Recieved ', boat_data);
            if (boat_data['driver'])
                dispatch(driverActions.update(boat_data['driver']));
            if (boat_data['helmsman'])
                dispatch(helmsmanActions.update(boat_data['helmsman']));
        })

        return next => action => {


            //action.meta.emit denotes whether or not action should be passed through socket.io
            if (action.meta && action.meta.emit) {
                console.log('emitting', action)
                socket.emit('client_data', action.payload);
            }
            return next(action);

        }
    }
}
