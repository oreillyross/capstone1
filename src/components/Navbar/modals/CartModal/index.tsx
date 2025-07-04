import { useCallback, useContext, useEffect, useState } from "react";
import {motion} from "framer-motion"
import { SessionContext } from "contexts/SessionContext";
import * as cartService from "services/cart";
import { LoadingSpinner } from "components/LoadingSpinner";
import type { ICartItem, ISetCartOpen } from "types";
import { CartItem } from "./CartItem";
import clsx from "clsx";

export const CartModal = ({ setCartOpen }: ISetCartOpen) => {
  const { user } = useContext(SessionContext);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[] | []>([]);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    const response = await cartService.getCart();
    setCartItems(await response.json());
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subTotal = 0;

  for (let item of cartItems) {
    totalQuantity += item.quantity;
    subTotal += item.quantity * item.price_per_unit;
  }

  return (
    <motion.div 
      initial={{translateX: "100%"}}
      animate={{translateX: 0}}
      transition={{duration: 0.5}}  
      className="bg-white h-screen w-full max-w-md flex flex-col">
    
      <div className="bg-emerald-800 shadow-md py-7 text-3xl text-white text-center font-playfair ">
        {user?.username}'s cart
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex-1 overflow-y-scroll pb-20">
            {cartItems.map((cart: ICartItem, idx) => (
              <div
                key={cart.id}
                className={clsx(
                  "pt-8 mt-8 mx-5",
                  idx !== 0 && " border-t border-slate-200",
                )}
              >
                <CartItem cart={cart} fetchCart={fetchCart} />
              </div>
            ))}
          </div>
          <div className="flex flex-col p-2">
            <div className="flex justify-between my-2 text-slate-500 pb-4">
              <div>Items {totalQuantity}</div>
              <div>
                Subtotal:{" "}
                <span className="mr-2 text-xl text-slate-700">${subTotal}</span>
              </div>
            </div>
            <button className="flex justify-center text-white rounded-full py-3 text-lg bg-emerald-700 items-center">
              Checkout <i className="fa-solid fa-arrows-turn-right ml-2"></i>
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};
