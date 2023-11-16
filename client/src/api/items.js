import axios from "./axios.js"

export const getItemsRequest = async () => axios.get("/items");

export const getItemRequest = async (id) => axios.get(`/items/${id}`);

export const createItemRequest = async (item) => axios.post("/items", item);

export const updateItemRequest = async (id, item) => axios.put(`/items/${id}`, item);

export const deleteItemRequest = async (id) => axios.delete(`/items/${id}`);
