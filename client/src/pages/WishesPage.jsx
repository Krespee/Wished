import React, { useEffect } from "react";
import { useWish } from "../context/WishContext";

function WishesPage() {
  const { getWishes, wishes } = useWish();

  useEffect(() => {
    getWishes();
  }, []);

  return (
    <div>
      {wishes.map((wish, i) => (
        <div key={i}>
          <h1>{wish.cardname}</h1>
          <p>{wish.description}</p>
          <p>{wish.cbu}</p>
          <p>{wish.alias}</p>
          <p>{wish.paymentlink}</p>
          <p>{wish.username}</p>
          <p>{wish.date}</p>
        </div>
      ))}
    </div>
  );
}

export default WishesPage;
