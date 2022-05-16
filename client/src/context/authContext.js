import { postAuthRequest } from '../api/auth'

export const authUser = async (login) => {
    const res = await postAuthRequest(login)
    console.log(res)
    return res
}