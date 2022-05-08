import axios from 'axios'

export const getDriversRequest = async () => await axios.get('/drivers')

export const getDriverRequest = async (driverId) => await axios.get('/drivers/' + driverId)

export const createDriverRequest = async (driver) => await axios.post('/drivers', driver)

export const updateDriverRequest = async (driverId, newFields) => await axios.put('/drivers/' + driverId, newFields)

export const deleteDriverRequest = async (driverId) => await axios.delete('/drivers/' + driverId)