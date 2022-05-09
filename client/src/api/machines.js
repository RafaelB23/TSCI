import axios from 'axios'

export const getMachinesRequest = async () => await axios.get('/machines')

export const getMachineRequest = async (machineId) => await axios.get('/machines/' + machineId)

export const createMachineRequest = async (machine) => await axios.post('/machines', machine)

export const updateMachineRequest = async (machineId, newFields) => await axios.put('/machines/' + machineId, newFields)

export const deleteMachineRequest = async (machineId) => await axios.delete('/machines/' + machineId)