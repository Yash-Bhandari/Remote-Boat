const url = 'http://192.168.43.236:5000/';

const putReq = {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    }
}

const getStatus = () => fetch(url + 'status').then(resp => resp.json())

const sendControl = async (sail_angle, rudder_angle) => fetch(url + 'control',
    {
        ...putReq, body: JSON.stringify({
            rudder_angle: rudder_angle,
            sail_angle: sail_angle
        })
    })

export { getStatus, sendControl }