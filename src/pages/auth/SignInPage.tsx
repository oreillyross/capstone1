import { Link } from "react-router";
import { AuthForm } from "./AuthForm";
import {FormContainer} from "./FormContainer"
import {apiFetch} from "../../services/apiFetch"

const response = await apiFetch("GET", "/api-key/info")
console.log(response.status)

export default function SignInPage() {
  return (
    <FormContainer>
      <div className="flex justify-center items-center">
        <AuthForm
          fields={[
            { label: "User Name", type: "text" },
            { label: "password", type: "password" },
          ]} submitLabel="Sign in"
        />
      </div>
      <Link to="/signup" className="text-green-500 text-sm underline">
        Create account
        </Link>
    </FormContainer>
  );
}
