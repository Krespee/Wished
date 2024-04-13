import { createContext, useContext, useState } from "react";
import { createWishRequest, getWishRequest, getMyWishRequest, deleteWishRequest } from "../api/wish";

const WishContext = createContext();

export const useWish = () => {
  const context = useContext(WishContext);
  if (!context) {
    throw new Error("UseWish must be used within a WishProvider");
  }
  return context;
};

export function WishProvider({ children }) {
  const [wishes, setWishes] = useState([]);
  const [myWishes, setMyWishes] = useState([]);
  
  const getWishes = async () => {
    try {
      const res = await getWishRequest();
      setWishes(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getMyWishes = async () => {
    try {
      const res = await getMyWishRequest();
      setMyWishes(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const createWish = async (wish) => {
    try {
      const res = await createWishRequest(wish);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWish = async (id) =>{
    try {
      const res = await deleteWishRequest(id)
      if (res.status == 204) setMyWishes(myWishes.filter(wish => wish._id !== id))
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <WishContext.Provider value={{ wishes, myWishes, createWish, getWishes, getMyWishes, deleteWish }}>
      {children}
    </WishContext.Provider>
  );
}
