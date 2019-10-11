const url = 'http://localhost:5000/';

const putReq = {
    method: 'PUT'
}

const getStatus = () => fetch(url+'status').then(resp => resp.json())

const sendRudder = (angle) => fetch(url+'rudder?angle='+angle, putReq)

const sendSail = (angle) => fetch(url+'sail?angle='+angle, putReq)

export { getStatus, sendRudder, sendSail }