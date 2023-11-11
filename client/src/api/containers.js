import axios from "./axios";

export const getContainersRequest = async () => axios.get("/contenedores");

export const getContainerRequest = async (id) =>
  axios.get(`/contenedores/${id}`);

export const createContainerRequest = async (container) =>
  axios.post("/contenedores", container);

export const updateContainerRequest = async (id, container) =>
  axios.put(`/contenedores/${id}`, container);

export const deleteContainerRequest = async (id) =>
  axios.delete(`/contenedores/${id}`);
