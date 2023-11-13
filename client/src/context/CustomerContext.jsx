import { createContext, useContext, useState, useEffect } from "react";

import {
    getCustomersRequest,
    getCustomerRequest,
    createCustomerRequest,
    updateCustomerRequest,
    deleteCustomerRequest,
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
