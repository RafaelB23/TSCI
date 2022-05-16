import axios from 'axios'

export const postAuthRequest = async (login) => await axios.post('/', login)
export const getUsersRequest = async () => await axios.get('/')
