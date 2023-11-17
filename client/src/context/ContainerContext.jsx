import { createContext, useContext, useState, useEffect } from "react";

import {
  getContainerByNumberRequest,
  createContainerRequest,
  updateContainerRequest,
  deleteContainerRequest,
  getContainerRequest,
  getContainersRequest,
} from "../api/containers";

const ContainerContext = createContext();

export const useContainers = () => {
  const context = useContext(ContainerContext);

  if (!ContainerContext)
    throw new Error("useContainers must be used within a ContainerProvider");
  return context;
};

export function ContainerProvider({ children }) {
  const [containers, setContainers] = useState([]);
  const [errors, setErrors] = useState([]);

  const getContainerByNumber = async (id) => {
    try {
      console.log("running the query");
      const res = await getContainerByNumberRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getContainer = async (id) => {
    try {
      const res = await getContainerRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getContainers = async () => {
    try {
      const res = await getContainersRequest();
      setContainers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createContainer = async (container) => {
    try {
      await createContainerRequest(container);
      getContainers();
    } catch (error) {
      setErrors(() => error.response.data.message);
      console.log(error);
    }
  };

  const deleteContainer = async (id) => {
    try {
      const res = await deleteContainerRequest(id);
      if (res.status === 204)
        setContainers(() =>
          containers.filter((container) => container._id !== id)
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
    <ContainerContext.Provider
      value={{
        getContainerByNumber,
        getContainers,
        getContainer,
        containers,
        createContainer,
        deleteContainer,
        errors,
      }}
    >
      {children}
    </ContainerContext.Provider>
  );
}
