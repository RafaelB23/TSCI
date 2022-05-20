import { postAuthRequest } from '../api/auth'

export const authUser = async (login) => {
    const res = await postAuthRequest(login)
    return res
}