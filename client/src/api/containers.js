import axios from "./axios";

export const getContainersRequest = () => axios.get("/contenedores");

export const getContainerRequest = (id) => axios.get(`/contenedores/${id}`);

export const createContainerRequest = (customer) =>
  axios.post("/contenedores", customer);

export const updateContainerRequest = (id, customer) =>
  axios.put(`/contenedores/${id}`, customer);

export const deleteContainerRequest = (id) => axios.delete(`/contenedores/${id}`);
