import { createContext, useState, useContext, useEffect } from 'react'
import { createDriverRequest, deleteDriverRequest, getDriverRequest, getDriversRequest, updateDriverRequest } from '../api/drivers'

export const driversContext = createContext()

export const useDrivers = () => {
    const context = useContext(driversContext)
    if (!context) throw new Error("Driver data is missing");
    return context
}

export const DriverProvider = ({ children }) => {

    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        (async () => {
            const res = await getDriversRequest()
            setDrivers(res.data)
        })()
    }, [])

    const createDriver = async (driver) => {
        const res = await createDriverRequest(driver)
        setDrivers([...drivers, res.data])
    }

    const getDriver = async (driverId) => {
        const res = await getDriverRequest(driverId)
        return res.data
    }

    const updateDriver = async (driverId, driver) => {
        const res = await updateDriverRequest(driverId, driver)
        setDrivers(drivers.map((driver) => (driver._id === driverId ? res.data : driver)))
    }

    const deleteDriver = async (driverId) => {
        await deleteDriverRequest(driverId)
        setDrivers(drivers.filter((driver) => driver._id !== driverId))
    }

    return <driversContext.Provider value={{
        drivers,
        createDriver,
        getDriver,
        updateDriver,
        deleteDriver
    }}>
        {children}
    </driversContext.Provider>
}