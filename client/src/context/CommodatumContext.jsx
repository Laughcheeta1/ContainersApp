import { createContext, useContext, useState, useEffect } from "react";

import {
    getCommodatumsRequest,
    getCommodatumRequest,
    createCommodatumRequest,
    updateCommodatumRequest,
    deleteCommodatumRequest,
} from "../api/commodatums";

const CommodatumContext = createContext();

export const useCommodatums = () => {
  const context = useContext(CommodatumContext);

  if (!CommodatumContext)
    throw new Error("useCommodatums must be used within a CommodatumProvider");
  return context;
};

export function CommodatumProvider({ children }) {
  const [commodatum, setCommodatums] = useState([]);
  const [errors, setErrors] = useState([]);

  const getCommodatums = async () => {
    try {
      const res = await getCommodatumsRequest();
      setCommodatums(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCommodatum = async (id) => {
    try
    {
      const res = await getCommodatumRequest(id);
    } 
    catch (error)
    {
      console.log(error);
    }
  };

  const createCommodatum = async (commodatum) => {
    try {
      await createCommodatumRequest(commodatum);
      getCommodatums();
    } catch (error) {
      setErrors(() => error.response.data.message);
      console.log(error);
    }
  };

  const deleteCommodatum = async (id) => {
    try {
      const res = await deleteCommodatumRequest(id);
      if (res.status === 204)
        setCommodatums(() =>
          commodatum.filter((commodatum) => commodatum._id !== id)
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
    <CommodatumContext.Provider
      value={{
        getCommodatums,
        getCommodatum,
        commodatum,
        createCommodatum,
        deleteCommodatum,
        errors,
      }}
    >
      {children}
    </CommodatumContext.Provider>
  );
}
