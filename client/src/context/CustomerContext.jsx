<<<<<<< HEAD
import { useEffect } from "react";
import { useCustumer } from "../context/CustomerContext";
import ContainerCard from "../components/CustomerCard";
import BarraBusqueda from "../components/BarraBusqueda";
import "../styles/busqueda.css";
=======
import { createContext, useContext, useState, useEffect } from "react";

import {
    getCustomersRequest,
    getCustomerRequest,
    createCostumerRequest,
    updateCostumerRequest,
    deleteCostumerRequest,
} from "../api/customers";

const CustomerContext = createContext();

export const useCustomers = () => {
  const context = useContext(CustomerContext);

  if (!CustomerContext)
    throw new Error("useCustomers must be used within a ContainerProvider");
  return context;
};

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [errors, setErrors] = useState([]);

  const getCustomers = async () => {
    try {
      const res = await getCustomersRequest();
      setCustomers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCustomer = async (customer) => {
    try {
      await createCustomerRequest(customer);
      getCustomers();
    } catch (error) {
      setErrors(() => error.response.data.message);
      console.log(error);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      const res = await deleteCustomerRequest(id);
      if (res.status === 204)
        setCustomers(() =>
          customers.filter((customer) => customer._id !== id)
        );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors(() => []);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <CustomerContext.Provider
      value={{
        getCustomers,
        customers,
        createCustomer,
        deleteCustomer,
        errors,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
>>>>>>> 61a080ddd963bb70f3468c8aaa01ba59e7cfe5d2
