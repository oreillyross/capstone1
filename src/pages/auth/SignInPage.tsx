import { Link, useLocation, useNavigate } from "react-router";
import { AuthForm } from "./AuthForm";
import { FormContainer } from "./FormContainer";
// import {apiFetch} from "services/apiFetch"
import * as userService from "services/user";
import { useContext, useState } from "react";
import { SessionContext } from "contexts/SessionContext";
import { LoggedIn } from "components/LoggedIn";

// const response = await apiFetch("GET", "/api-key/info")
// console.log(response.status)

export default function SignInPage() {
  const [error, setError] = useState("");
  const location = useLocation();
  const sessionContext = useContext(SessionContext);
  const navigate = useNavigate();

  return (
    <LoggedIn>
      <FormContainer>
        {error && (
          <div className="border border-red-400 min-w-24 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}
        {location.state?.userCreated && (
          <div className="border border-green-400 min-w-24 bg-green-100 p-2 rounded">
            Account created successfully, please login!
          </div>
        )}
        <div className="flex justify-center items-center">
          <AuthForm
            fields={[
              { label: "username", type: "text" },
              { label: "password", type: "password" },
            ]}
            submitLabel="Sign in"
            onSubmit={async ({ username, password }) => {
              const response = await userService.createSession({
                username,
                password,
              });

              const data = await response.json();
              if (response.status == 201) {
                setError("");
                sessionContext?.signIn(data.capstone_session_token);
                navigate("/plants");
              } else {
                setError(data.error);
              }
            }}
          />
        </div>
        <Link to="/signup" className="text-green-500 text-sm underline">
          Create account
        </Link>
      </FormContainer>
    </LoggedIn>
  );
}
