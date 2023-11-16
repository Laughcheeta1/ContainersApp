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
    throw new Error("useCustomers must be used within a CustomerProvider");
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

  const getCustomer = async (id) => {
    try {
      const res = await getCustomerRequest(id);
      return res.data;
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

  const editCustomer = async (id, customer) => {
    // Only change the fields that are meant to be changed

    // if (customer.name) customerToChange.name = customer.name;

    // if (customer.phone) customerToChange.phone = customer.phone;

    // if (customer.address) customerToChange.address = customer.address;

    try {
      await updateCustomerRequest(id, customer);
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
        setCustomers(() => customers.filter((customer) => customer._id !== id));
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
        getCustomer,
        getCustomers,
        editCustomer,
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
