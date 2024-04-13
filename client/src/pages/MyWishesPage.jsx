import React, { useEffect } from "react";
import { useWish } from "../context/WishContext";
import WishCard from '../components/WishCard';

function WishesPage() {
  const { getMyWishes, myWishes } = useWish();

  useEffect(() => {
    getMyWishes();
  }, []);

  return (
    <div>
      {myWishes.map((wish, i) => (
        <WishCard wish={wish} key={i}/>
      ))}
    </div>
  );
}

export default WishesPage;
