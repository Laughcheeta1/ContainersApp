import { createContext, useContext, useState, useEffect } from "react";

import {
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
      setErrors(() => error.response.data);
      console.log(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await deleteItemRequest(id);

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
      value={{ createItem, deleteItem, getItems, errors, items }}
    >
      {children}
    </ItemContext.Provider>
  );
}
