import Machine from "../models/Machine.js";

export const getMachines = async (req, res) => {
  try {
    const machine = await Machine.find({});
    res.json(machine);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMachine = async (req, res) => {
  try {
    const machine = await Machine.findById(req.params.id);
    if (!machine) return res.sendStatus(404);
    return res.json(machine);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMachine = async (req, res) => {
  try {
    const { noMachine, costHour, area } = req.body;
    const newMachine = new Machine({ noMachine, costHour, area });
    const machine = await Machine.find({
        noMachine: newMachine.noMachine
    });
    if(machine.length!==0){
      throw new Error('Es posible que ya exista')
    }else{
      await newMachine.save();
    }
    return res.json(newMachine);
  } catch (error) {
    return res.send(error.message);
  }
};

export const updateMachine = async (req, res) => {
  try {
    const updatedMachine = await Machine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log("Actualizada");
    return res.send(updatedMachine);
  } catch (error) {
    return res.send(error.message);
  }
};

export const deleteMachine = async (req, res) => {
  try {
    const machineRemoved = await Machine.findByIdAndDelete(req.params.id);
    if (!machineRemoved) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
