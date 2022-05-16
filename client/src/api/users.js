import axios from 'axios'

export const getUsersRequest = async () => await axios.get('/user')

export const getUserRequest = async (userId) => await axios.get('/user/' + userId)

export const createUserRequest = async (user) => await axios.post('/user', driver)

export const updateUserRequest = async (userId, newFields) => await axios.put('/user/' + userId, newFields)

export const deleteUserRequest = async (userId) => await axios.delete('/user/' + userId)