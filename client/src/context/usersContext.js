import { createContext, useState, useContext, useEffect } from 'react'
import { createUserRequest, deleteUserRequest, getUserRequest, getUsersRequest, updateUserRequest } from '../api/users'

export const usersContext = createContext()

export const useUsers = () => {
    const context = useContext(usersContext)
    if (!context) throw new Error("User data is missing");
    return context
}

export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const res = await getUsersRequest()
            setUsers(res)
        })()
    }, [])

    const createUser = async (user) => {
        const res = await createUserRequest(user)
        return res.data
        // setUsers([...users, res.data])
    }

    const getUser = async (userId) => {
        const res = await getUserRequest(userId)
        return res.data
    }

    const updateUser = async (userId, user) => {
        const res = await updateUserRequest(userId, user)
        setUsers(users.map((user) => (user._id === userId ? res.data : user)))
    }

    const deleteUser = async (userId) => {
        await deleteUserRequest(userId)
        setUsers(users.filter((user) => user._id !== userId))
    }

    return <usersContext.Provider value={{
        users,
        createUser,
        getUser,
        updateUser,
        deleteUser
    }}>
        {children}
    </usersContext.Provider>
}