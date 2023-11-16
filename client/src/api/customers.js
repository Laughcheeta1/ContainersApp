import axios from "./axios";

export const getCustomersRequest = async () => axios.get("/customers");

export const getCustomerRequest = async (id) => axios.get(`/customers/${id}`);

export const createCustomerRequest = async (costumer) => axios.post("/customers", costumer);

export const updateCustomerRequest = async (id, costumer) => axios.put(`/customers/${id}`, costumer);

export const deleteCustomerRequest = async (id) => axios.delete(`/customers/${id}`);