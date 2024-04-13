import axios from "./axios.js";

export const getWishRequest = () => axios.get("/wishes");

export const getMyWishRequest = () => axios.get("/mywishes");

export const createWishRequest = (wish) => axios.post("/wishes", wish);

export const updateWishRequest = (wish) =>
  axios.put(`/wishes/${wish._id}`, wish);

export const deleteWishRequest = (id) => axios.delete(`/wishes/${id}`);