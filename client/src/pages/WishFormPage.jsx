import React from "react";
import { useForm } from "react-hook-form";
import { useWish } from '../context/WishContext.jsx';
import { useNavigate } from 'react-router-dom';

function WishFormPage() {
  const { register, handleSubmit } = useForm();
  const { wishes, createWish } = useWish()
  const navigate = useNavigate()

  //manejar el mandar campos en blanco

  const onSubmit = handleSubmit((data) => {
    createWish(data)
    navigate("/mywishes")
  });

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Card Name"
          {...register("cardname")}
          autoFocus
          className="my-3 w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        />

        <textarea
          placeholder="Description"
          rows="3"
          {...register("description")}
          className="my-3 w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        ></textarea>

        <input
          className="my-3 w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          type="text"
          placeholder="CBU"
          {...register("cbu")}
        />
        <input
          className="my-3 w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          type="text"
          placeholder="ALIAS"
          {...register("alias")}
        />
        <input
          className="my-3 w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          type="text"
          placeholder="Payment Link"
          {...register("paymentlink")}
        />

        <button>Save</button>
      </form>
    </div>
  );
}

export default WishFormPage;
