import axios from "axios";

export const getContainersRequest = () => axios.get("/clientes")

export const getContainerRequest = (id) => axios.get(`/clientes/${id}`)

export const createContainerRequest = (customer) => axios.post("/clientes", customer)

export const updateContainerRequest = (id, customer) => axios.put(`/clientes/${id}`, customer)

export const deleteContainerRequest = (id) => axios.delete(`/clientes/${id}`)