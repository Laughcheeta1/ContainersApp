import { createContext, useContext, useState, useEffect } from "react";

import {
  getItemsByNameRequest,
  createItemRequest,
  deleteItemRequest,
  getItemRequest,
  getItemsRequest,
} from "../api/items";

const ItemContext = createContext();

export const useItems = () => {
  const context = useContext(ItemContext);

  if (!ItemContext) throw new Error("useItems must be inside a ItemProvider");
  return context;
};

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState([]);

  const getItemsByName = async (name) => {
    try {
      const res = await getItemsByNameRequest(name);
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getItems = async () => {
    try {
      const res = await getItemsRequest();
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createItem = async (item) => {
    try {
      await createItemRequest(item);
      getItems();
    } catch (error) {
      console.log(error);
      setErrors(() => error.response.data.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      const res = await deleteItemRequest(id);

      if (res.status === 204)
        setItems(() => items.filter((item) => item._id !== id));
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
    <ItemContext.Provider
      value={{ getItemsByName, createItem, deleteItem, getItems, errors, items }}
    >
      {children}
    </ItemContext.Provider>
  );
}
