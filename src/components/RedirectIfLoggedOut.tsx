import React, { ReactNode, useContext, useEffect } from "react";
import { SessionContext } from "contexts/SessionContext";
import { useNavigate } from "react-router";

interface RedirectIfLoggedOutProps {
  children: ReactNode;
}

export const RedirectIfLoggedOut: React.FC<RedirectIfLoggedOutProps> = ({ children }) => {
  const {user} = useContext(SessionContext);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  return <>{children}</>;
};
