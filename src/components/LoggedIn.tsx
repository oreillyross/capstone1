import React, { ReactNode, useContext, useEffect } from "react";
import { SessionContext } from "contexts/SessionContext";
import { useNavigate } from "react-router";

interface LoggedInProps {
  children: ReactNode;
}

export const LoggedIn: React.FC<LoggedInProps> = ({ children }) => {
  const {user} = useContext(SessionContext);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/plants");
  }, [user]);

  return <>{children}</>;
};
