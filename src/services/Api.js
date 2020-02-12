import apisauce from 'apisauce'

const create = (type = '') => {

    let api
    const access_token = localStorage.getItem("access_token") || ""
    
    switch(type) {
        case 'POSITION':
            api = apisauce.create({
                baseURL: 'http://35.238.229.74:8080',
                timeout: 30000,
                headers: {
                    Authorization: "Bearer " + access_token
                }
            })
            break
        case 'ROOM':
            api = apisauce.create({
                baseURL: 'http://35.238.229.74:8080',
                timeout: 30000,
                headers: {
                    Authorization: "Bearer " + access_token
                }
            })
            break
        case 'EMPLOYEE':
            api = apisauce.create({
                baseURL: 'http://35.238.229.74:8080',
                timeout: 30000,
                headers: {
                    Authorization: "Bearer " + access_token
                }
            })
            break
        case 'SCHEDULE':
            api = apisauce.create({
                baseURL: 'http://35.238.229.74:8080',
                timeout: 30000,
                headers: {
                    Authorization: "Bearer " + access_token
                }
            })
            break
        case 'LOCATION':
            api = apisauce.create({
                baseURL: 'http://35.238.229.74:8080',
                timeout: 30000,
                headers: {
                    Authorization: "Bearer " + access_token
                }
            })
            break
        case 'USERAUTH':
            api = apisauce.create({
                baseURL: 'http://35.238.229.74:8080',
                timeout: 30000,
            })
            break
        default:
            break
    }

    const getAllPagingPosition = body => api.get('/position/paging' , body)
    const postPosition = body => api.post('/position', body)
    const deletePosition = body => api.delete('/position/' + body)

    const getAllPagingRoom = body => api.get('/room/paging', body)
    const postRoom = body => api.post('/room', body)
    const deleteRoom = body => api.delete('/room/' + body)

    const getAllEmployee = body => api.get('/employee/paging', body)
    const postEmployee = body => api.post('/employee/post', body)
    const putEmployee = body => api.put('/employee/put', body)
    const deleteEmployee = body => api.delete('/employee/' + body)
    const uploadFotoEmployee = body => api.post('/employee/uploadFoto', body)

    const getAllPagingSchedule = body => api.get('/schedule/paging', body)
    const postSchedule = body => api.post('/schedule', body)
    const deleteSchedule = body => api.delete('/schedule/' + body)

    const getAllPagingLocation = body => api.get('/location/paging', body)
    const postLocation = body => api.post('/location', body)
    const deleteLocation = body => api.delete('/location/' + body)

    const userAuth = body => api.post('/employee/login', body)

    const getUserDetail = body => api.get('/employee/isLogin', {}, {
        headers: {
            'Authorization': 'Bearer ' + body
        }
    })

    return {
        getAllPagingPosition,
        postPosition,
        deletePosition,
        userAuth,
        getUserDetail,
        getAllPagingRoom,
        postRoom,
        deleteRoom,
        getAllPagingSchedule,
        postSchedule,
        deleteSchedule,
        getAllPagingLocation,
        postLocation,
        deleteLocation,
        getAllEmployee,
        postEmployee,
        putEmployee,
        deleteEmployee,
        uploadFotoEmployee
    }



}

export default { create }