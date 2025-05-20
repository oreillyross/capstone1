import { useContext, useState } from "react";

import { SessionContext } from "contexts/SessionContext";
import { Link } from "react-router";

export const Navbar = () => {
  const session = useContext(SessionContext);
  const [showSignOut, setShowSignout] = useState(false);

  return (
    <nav
      onMouseLeave={() => setShowSignout(false)}
      className="bg-emerald-800 flex justify-center"
    >
      <div className="max-w-3xl w-full flex justify-between items-center">
        <div className="flex flex-col items-center font-playfair text-2xl text-white">
          <Link to="/plants">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
            </Link>
          Plants
        </div>
        <div className="p-2 relative">
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
      </div>
    </nav>
  );
};
