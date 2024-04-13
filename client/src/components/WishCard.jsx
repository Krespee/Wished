import { useWish } from '../context/WishContext';

function WishCard({ wish }) {
  const date = new Date(wish.date);
  const formattedDate = date.toLocaleString();
  const {deleteWish} = useWish()
  return (
    <div className=" border-zinc-50 border bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className='flex justify-between'>
        <h1 className="text-2xl font-bold">{wish.cardname}</h1>
        <div>
          <button onClick={()=>{
            deleteWish(wish._id)
          }}>Delete</button>
        </div>
      </header>
      <p>{wish.description}</p>
      <p>{wish.cbu}</p>
      <p>{wish.alias}</p>
      <p>{wish.paymentlink}</p>
      <p>{wish.username}</p>
      <p>{formattedDate}</p>
    </div>
  );
}

export default WishCard;
