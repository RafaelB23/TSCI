import axios from 'axios'

export const getUsersRequest = async () => await axios.get('/users')

export const getUserRequest = async (userId) => await axios.get('/users/' + userId)

export const createUserRequest = async (user) => await axios.post('/users', user)

export const updateUserRequest = async (userId, newFields) => await axios.put('/users/' + userId, newFields)

export const deleteUserRequest = async (userId) => await axios.delete('/users/' + userId)