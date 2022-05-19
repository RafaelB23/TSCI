import axios from 'axios'

export const getSucursalesRequest = async () => await axios.get("/sucursales")

export const getSucursalRequest = async (sucursalId) => await axios.get("/sucursales/" + sucursalId)

export const createSucursalRequest = async (newSucursal) => await axios.post("/sucursales", newSucursal)

export const updateSucursalRequest = async (sucursalId, newSucursal) => await axios.put("/sucursales/" + sucursalId, newSucursal)

export const deleteSucursalRequest = async (sucursalId) => await axios.delete("/sucursales/" + sucursalId)
