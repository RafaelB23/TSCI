import { createContext, useState, useContext, useEffect } from 'react'
import { createMachineRequest, deleteMachineRequest, getMachineRequest, getMachinesRequest, updateMachineRequest } from '../api/machines'

export const machinesContext = createContext()

export const useMachines = () => {
    const context = useContext(machinesContext)
    if (!context) throw new Error("Machine data is missing");
    return context
}

export const MachineProvider = ({ children }) => {

    const [machines, setMachines] = useState([])

    useEffect(() => {
        (async () => {
            const res = await getMachinesRequest()
            setMachines(res.data)
        })()
    }, [])

    const createMachine = async (machine) => {
        const res = await createMachineRequest(machine)
        setMachines([...machines, res.data])
    }

    const getMachine = async (machineId) => {
        const res = await getMachineRequest(machineId)
        return res.data
    }

    const updateMachine = async (machineId, machine) => {
        const res = await updateMachineRequest(machineId, machine)
        setMachines(machines.map((machine) => (machine._id === machineId ? res.data : machine)))
    }

    const deleteMachine = async (machineId) => {
        await deleteMachineRequest(machineId)
        setMachines(machines.filter((machine) => machine._id !== machineId))
    }

    return <machinesContext.Provider value={{
        machines,
        createMachine,
        getMachine,
        updateMachine,
        deleteMachine
    }}>
        {children}
    </machinesContext.Provider>
}