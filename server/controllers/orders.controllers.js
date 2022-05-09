import Order from "../models/Order.js";
import { deleteImage, uplaodImage } from "../libs/cloudinary.js";
import fs from "fs-extra";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";

const Sche = mongoose.model(
  "Tmp",
  new mongoose.Schema({ files: { type: Object } })
);

export const getOrders = async (req, res) => {
  try {
    const order = await Order.find({});
    res.json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { owner, description } = req.body;
    const bp = [];
    if (req.body.blueprints?.files) {
      const files = req.body.blueprints.files;
      for (let f in files) {
        const result = await uplaodImage(files[f]);
        bp.push({
          url: result.secure_url,
          public_id: result.public_id,
        });
      }
    }
    const newOrder = new Order({ owner, description, blueprints: bp });
    await newOrder.save();
    return res.json(newOrder)
  } catch (error) {
    console.log(error.message)
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
  
};
export const postTmpFiles = async (req, res) => {
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
      obj = unico();
    } else {
      obj = multi();
    }
    const newSche = new Sche({ files: obj });
    const c = await newSche.save();
    return res.json(c);
  } catch (error) {
    console.log(error.message);
    // return res.status(500).json({message: error.message})
  }
};
export const updateTmpFiles = async (req, res) => {};
export const deleteTmpFiles = async (req, res) => {
  try {
    const tmpRemoved = await Sche.findByIdAndDelete(req.params.id);
    const paths = tmpRemoved.files;
    for (let p in paths) {
      await fs.remove(paths[p]);
    }
    if (!tmpRemoved) return res;

    return res;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
