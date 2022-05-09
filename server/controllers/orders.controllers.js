import Order from "../models/Order.js";
import { deleteImage, uplaodImage } from "../libs/cloudinary.js";
import fs from "fs-extra";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";

const Sche = mongoose.model('Tmp', new mongoose.Schema({files: {type: Object}}))


export const getOrders = async (req, res) => {
  try {
    const order = await Order.find({});
    res.json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const createOrder = async (req, res) => {
  console.log(req.body.blueprints);
  const files = req.body.blueprints;
  for (let f in files) {
    console.log(f);
  }
  try {
    const files = req.files;
    console.log(files);

    // console.log(req.files)
    // console.log(res.files)

    // const files = req.files.blueprints

    // const promise = files.map((file) => {
    //     console.log(file)
    //     const savePath = ('../upload')
    //     return file.mv(savePath)
    // })

    // await Promise.all(promise)

    // const { owner, description, blueprints} = req.body
    // let created_at = Date()
    // console.log(req.files)
    // if(req.files?.blueprints){
    //     const result = await uplaodImage(req.files.blueprints.tempFilePath)
    //     // console.log(result)
    //     // await fs.remove(req.files.blueprints.tempFilePath)
    //     blueprints = {
    //         url: result.secure_url,
    //         public_id: result.public_id
    //     }
    // }
    // const newOrder = new Order({ owner, description, blueprints, created_at})
    // // console.log(newOrder)
    // await newOrder.save()
    // return res.json(newOrder)
    return "Hola mundo";
  } catch (error) {
    // console.log(error)
    return res.status(500).json({ message: error.message });
  }
};
export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log("Actualizada");
    return res.send(updatedOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteOrder = async (req, res) => {
  try {
    const orderRemoved = await Order.findByIdAndDelete(req.params.id);
    if (!orderRemoved) return res.sendStatus(404);
    const bl = orderRemoved.blueprints;
    console.log(bl);
    // bl.map
    // if (orderRemoved.blueprints.public_id) {
    //     await deleteImage(orderRemoved.blueprints.public_id)
    // }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.sendStatus(404);
    return res.json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// -------------------------------------------------------
export const getTmpFiles = async (req, res) => {
  try {
    const tmp = await Sche.find({});
    return res.json(tmp);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTmpFile = async (req, res) => {
    console.log(req.params)
    const tmp = await Sche.find({files: ["upload\\tmp-7-1652081178547"]})
    return res.json(tmp)
};
export const postTmpFiles = async (req, res) => {
    console.log("Ejecutando TestOrder");
    try {
      var obj = [];
      const mfiles = req.files["files[]"];
  
      const unico = () => {
        var arr = [];
        arr.push(mfiles["tempFilePath"]);
        return arr;
      };
      const multi = () => {
        var arr = [];
        for (let i in mfiles) {
          for (let p in mfiles[i]) {
            if (p === "tempFilePath") {
              arr.push(mfiles[i][p]);
            }
          }
        }
        return arr;
      };
  
      if (mfiles["tempFilePath"]) {
        console.log(unico());
        obj = unico();
      } else {
        console.log(multi());
        obj = multi();
      }
      const newSche = new Sche({files: obj})
      await newSche.save()
      return res.json(obj);
    } catch (error) {
      console.log(error.message);
      // return res.status(500).json({message: error.message})
    }
  };
export const updateTmpFiles = async (req, res) => {};
export const deleteTmpFiles = async (req, res) => {
    try {
        const tmpRemoved = await Sche.findByIdAndDelete(req.params.id);
        if (!tmpRemoved) return res.sendStatus(404);

        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};
