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
      console.log(res.data);
      setContainers(() => res.data);
    } catch (error) {}
  };

  return (
    <ContainerContext.Provider value={{ getContainers, containers }}>
      {children}
    </ContainerContext.Provider>
  );
}
