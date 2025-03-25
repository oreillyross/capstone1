import "./App.css";
import { Routes, Route } from "react-router";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      
    </main>
  );
}
