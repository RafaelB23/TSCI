import axios from "axios";

export const getOrdersRequest = async () => await axios.get("/orders");

export const getOrderRequest = async (orderId) =>
  await axios.get("/orders/" + orderId);

// export const createOrderRequest = async (order) => {
// //   const form = new FormData();
// //   console.log(order)
// //   for (let key in order) {
// //     form.append(key, order[key]);
// //     // if(key === 'blueprints'){
// //     //     // console.log(key, order[key][0])
// //     // }
// //   }
// // //   console.log(form)
//   return await axios.post("/orders", order);
// };

export const createOrderRequest = async (order) => {
    // console.log('create: ', order)
    return await axios.post("/orders", order);
};

export const testOrderRequest = async (data_files) => {
    // console.log('test: ', data_files)
  return await axios.post("/tmp", data_files);
};

export const updateOrderRequest = async (orderId, newFields) =>
  await axios.put("/orders/" + orderId, newFields);

export const deleteOrderRequest = async (orderId) =>
  await axios.delete("/orders/" + orderId);
