import axios from "./axios";

export const getCustomersRequest = async () => axios.get("/customers");

export const getCustomerRequest = async (id) => axios.get(`/customers/${id}`);

export const createCostumerRequest = async (costumer) => axios.post("/customer", costumer);

export const updateCostumerRequest = async (id, costumer) => axios.put(`/customer/${id}`, costumer);

export const deleteCostumerRequest = async (id) => axios.delete(`/customers/${id}`);