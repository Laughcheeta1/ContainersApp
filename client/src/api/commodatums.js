import axios from "./axios.js"

export const getCommodatumsRequest = async () => axios.get("/commodatums");

export const getCommodatumRequest = async (id) => axios.get(`/commodatums/${id}`);

export const createCommodatumRequest = async (commodatum) => axios.post("/commodatums", commodatum);

export const updateCommodatumRequest = async (id, commodatum) => axios.put(`/commodatums/${id}`, commodatum);

export const deleteCommodatumRequest = async (id) => axios.delete(`/commodatums/${id}`);
