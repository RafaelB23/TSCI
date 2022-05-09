import axios from "axios";

export const getOrdersRequest = async () => await axios.get("/orders");

export const getOrderRequest = async (orderId) =>
  await axios.get("/orders/" + orderId);

export const createOrderRequest = async (order) => {
    return await axios.post("/orders", order);
};

export const testOrderRequest = async (data_files) => {
  return await axios.post("/tmp", data_files);
};

export const deleteTmpRequest = async (tmpId) =>
  await axios.delete("/tmp/" + tmpId);

export const updateOrderRequest = async (orderId, newFields) =>
  await axios.put("/orders/" + orderId, newFields);

export const deleteOrderRequest = async (orderId) =>
  await axios.delete("/orders/" + orderId);
