import { useContext, useState } from "react";

import { SessionContext } from "contexts/SessionContext";
import { Link } from "react-router";

import {CartModal} from "./modals/CartModal"

export const Navbar = () => {
  const session = useContext(SessionContext);
  const [showSignOut, setShowSignout] = useState(false);
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
    <nav
      onMouseLeave={() => setShowSignout(false)}
      className="bg-emerald-800 font-lato flex justify-center"
    >
      <div className="px-8 py-2 max-w-3xl w-full flex justify-between items-center">
          <Link to="/plants">
        <div className="flex flex-col items-center font-playfair text-2xl text-white">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
          Plants
        </div>
            </Link>
        <div className="flex justify-end flex-1">
         <div className="relative min-w-32">
          <button
            onClick={() => setShowSignout(true)}
            className="flex items-center text-emerald-200"
          >
            <i className="mr-2 fa-solid fa-user"></i>
            {session.user?.username}
          </button>
          {showSignOut && (
            <div className=" absolute right-0 w-40 mt-2 mr-2 shadow-lg ronded">
              <button 
                onClick={session.signOut}
                className=" flex items-center gap-2 px-4 py-2 bottom-[-34px] w-full left-0 bg-emerald-100 rounded-md p-2">
              <i className="fa-solid fa-door-open"></i>
                Sign Out
              </button>{" "}
            </div>
          )}
           </div>
          <button 
            onClick={() => setCartOpen(true)}
            className="text-emerald-200 flex items-center">
            <i className="fa-solid fa-cart-shopping mr-2"></i>
            Cart
          </button>
        </div>
      </div>
    </nav>
      {cartOpen && <CartModal setCartOpen={setCartOpen}/>}
    </>
  );
};
