import { RemoveScroll } from "react-remove-scroll";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "contexts/SessionContext";
import * as cartService from "services/cart";
import { LoadingSpinner } from "components/LoadingSpinner";
import type { ICartItem, ISetCartOpen } from "types";
import { CartItem } from "./CartItem";

export const CartModal = ({ setCartOpen }: ISetCartOpen) => {
  const { user } = useContext(SessionContext);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[] | []>([])
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await cartService.getCart();
      setCartItems(await response.json());
      setLoading(false);
    })();
  }, []);

  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end">
        <div className="bg-white h-screen w-full max-w-md">
          <button onClick={() => setCartOpen(false)} className="absolute top-0 right-0 p-2">
          <i
           className="fa-regular fa-circle-xmark text-4xl text-emerald-400"
          />
          </button>
          <div className="bg-emerald-800 shadow-md py-7 text-3xl text-white text-center font-playfair ">
            {user?.username}'s cart
          </div>
          <div>{loading ? <LoadingSpinner /> : <div>
            {cartItems.map((cart: ICartItem) => <CartItem key={cart.id} cart={cart}/>)}
          </div>}</div>
        </div>
      </div>
    </RemoveScroll>
  );
};
