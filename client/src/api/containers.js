import axios from "./axios";

export const getContainerByNumberRequest = async (number) => axios.get(`/containersByNumber/${number}`);

export const getContainersRequest = async () => axios.get("/containers");

export const getContainerRequest = async (id) =>
  axios.get(`/containers/${id}`);

export const createContainerRequest = async (container) =>
  axios.post("/containers", container);

export const updateContainerRequest = async (id, container) =>
  axios.put(`/containers/${id}`, container);

export const deleteContainerRequest = async (id) =>
  axios.delete(`/containers/${id}`);
