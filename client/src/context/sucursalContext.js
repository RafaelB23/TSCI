import { createContext, useState, useContext, useEffect } from 'react'
import { createSucursalRequest, deleteSucursalRequest, getSucursalRequest, getSucursalesRequest, updateSucursalRequest } from '../api/sucursales'

export const sucursalContext = createContext()

export const useSucursales = () => {
    const context = useContext(sucursalContext)
    if (!context) throw new Error("Sucursal Provider is missing");
    return context
}

export const SucursalProvider = ({ children }) => {

    const [sucursales, setSucursales] = useState([])

    useEffect(() => {
        (async () => {
            const res = await getSucursalesRequest()
            setSucursales(res.data)
        })()

    }, [])

    const createSucursal = async (sucursal) => {
        const res = await createSucursalRequest(sucursal)
        await setSucursales([...sucursales, res.data])
        return res
    }

    const getSucursal = async (sucursalId) => {
        const res = await getSucursalRequest(sucursalId)
        return res.data
    }

    const updateSucursal = async (sucursalId, sucursal) => {
        const res = await updateSucursalRequest(sucursalId, sucursal)
        setSucursales(sucursales.map((sucursal) => (sucursales._id === sucursalId ? res.data : sucursal)))
    }

    const deleteSucursal = async (sucursalId) => {
        await deleteSucursalRequest(sucursalId)
        setSucursales(sucursales.filter((sucursal) => sucursales._id !== sucursalId))
    }

    return <sucursalContext.Provider value={{
        sucursales,
        getSucursal,
        createSucursal,
        updateSucursal,
        deleteSucursal
    }}>
        {children}
    </sucursalContext.Provider>
}