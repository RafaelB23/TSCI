import { createContext, useState, useContext, useEffect } from 'react'
import { createDriverRequest, deleteDriverRequest, getDriverRequest, getDriversRequest, updateDriverRequest } from '../api/drivers'
// import { authUser } from './authContext'

// import { createDriver, getDriver, updateDriver, deleteDriver, getDrivers} from './driversContext'

export const driverContext = createContext()

export const useDrivers = () => {
    const context = useContext(driverContext)
    if (!context) throw new Error("Driver Provider is missing");
    return context
}

export const DriverProvider = ({ children }) => {

    const [drivers, setDrivers] = useState([])
    // const [user, setUser] = useState([])
    // const [drivers, setDrivers] = useState([])


    useEffect(() => {
        (async () => {
            const res = await getDriversRequest()
            setDrivers(res.data)
        })()

    }, [])

    // authUser()

    const createDriver = async (driver) => {
        const res = await createDriverRequest(driver)
        await setDrivers([...drivers, res.data])
        return res
    }

    const getDriver = async (driverId) => {
        const res = await getDriverRequest(driverId)
        return res.data
    }

    const updateDriver = async (driverId, driver) => {
        const res = await updateDriverRequest(driverId, driver)
        setDrivers(drivers.map((driver) => (drivers._id === driverId ? res.data : driver)))
    }

    const deleteDriver = async (driverId) => {
        await deleteDriverRequest(driverId)
        setDrivers(drivers.filter((driver) => drivers._id !== driverId))
    }

    return <driverContext.Provider value={{
        drivers,
        getDriver,
        createDriver,
        updateDriver,
        deleteDriver
    }}>
        {children}
    </driverContext.Provider>
}