import React, { ReactNode, useContext, useEffect } from "react";
import { SessionContext } from "contexts/SessionContext";
import { useNavigate } from "react-router";

interface RedirectIfLoggedInProps {
  children: ReactNode;
}

export const RedirectIfLoggedIn: React.FC<RedirectIfLoggedInProps> = ({ children }) => {
  const {user} = useContext(SessionContext);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/plants");
  }, [user]);

  return <>{children}</>;
};
