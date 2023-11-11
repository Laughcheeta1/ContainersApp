import { createContext, useContext, useState } from "react";

import {
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

  const getContainers = async () => {
    try {
      const res = await getContainersRequest();
      setContainers(() => res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createContainer = async (container) => {
    try {
      await createContainerRequest(container);
      getContainers();
    } catch (error) {
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

  return (
    <ContainerContext.Provider
      value={{ getContainers, containers, createContainer, deleteContainer }}
    >
      {children}
    </ContainerContext.Provider>
  );
}
