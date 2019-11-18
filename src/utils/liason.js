const url = 'http://192.168.43.41:5000/';

const putReq = {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    }
}

const getStatus = async () => fetch(url + 'status').then(resp => resp.json())

const sendControl = async (sail_angle, rudder_angle) => await fetch(url + 'control',
    {
        ...putReq, body: JSON.stringify({
            rudder_angle: rudder_angle,
            sail_angle: sail_angle
        })
    })

const sendHelmsman = async (data) => await fetch(url + 'helmsman',
    {
        ...putReq, body: JSON.stringify({data})
    })

const shutdown = async () => await fetch(url + 'shutdown', putReq)

export { getStatus, sendControl, shutdown, sendHelmsman }