import "./App.css";
import { Routes, Route } from "react-router";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import { useState } from "react";
import * as userService from "services/user";
import { SessionContext } from "contexts/SessionContext";
import { jwtDecode } from "jwt-decode";
import { PlantListPage } from "pages/PlantListPage";
import { PlantShowPage } from "pages/PlantShowPage";
import { ScrollToTop } from "components/ScrollToTop";

export default function App() {
  const [sessionToken, setSessionToken] = useState(userService.getSession());
 
  return (
    <SessionContext.Provider
      value={{
        user: sessionToken && sessionToken != "null" ? jwtDecode(sessionToken) : null,
        signIn: (token: string | null) => {
          setSessionToken(token);
          userService.storeSession(token);
        },
        signOut: () => {
          setSessionToken(null);
          userService.removeSession();
        },
      }}
    >
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/plants" element={<PlantListPage />} />
        <Route path="/plants/:plantId" element={<PlantShowPage />} />
      </Routes>
    </SessionContext.Provider>
  );
}
