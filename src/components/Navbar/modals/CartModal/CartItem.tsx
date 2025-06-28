import * as cartService from "services/cart"

export const CartItem = ({ cart, fetchCart }) => {
  return (
    <div className="flex">
      <img className="w-28 rounded-md" src={cart.image_src}/>
      <div className="flex justify-between flex-1">
      <div className="mx-4">
        <div className="font-playfair text-xl text-emerald-700">{cart.plant_name}</div>
        <div className="flex my-1 text-slate-500">
        <div className="text-slate-400 w-14 flex">Color:</div>{cart.pot_color}
        </div>
        <div className="flex text-slate-500 my-1 items-center">
        <div className="text-slate-400 w-14 my-1 flex">Qty:</div>{cart.quantity}
        </div>
      </div>
      </div>
      <div className="flex flex-col justify-between items-end">
      <div className="text-slate-500 ">${cart.quantity * cart.price_per_unit}</div>
      <button 
        onClick={async () => {
          await cartService.removePlantFromCart({itemId: cart.id})
          fetchCart();
        }}
        className="text-slate-400 text-sm hover:text-red-800"> <i className="fa-solid fa-trash mr-1 text-base"></i> Remove</button>
      </div>  
    </div>
  );
};
