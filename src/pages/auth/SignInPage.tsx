import { Link } from "react-router";
import { AuthForm } from "./AuthForm";
import {FormContainer} from "./FormContainer"
// import {apiFetch} from "services/apiFetch"
import * as userService from "services/user"

// const response = await apiFetch("GET", "/api-key/info")
// console.log(response.status)

export default function SignInPage() {
  return (
    <FormContainer>
      <div className="flex justify-center items-center">
        <AuthForm
          fields={[
            { label: "username", type: "text" },
            { label: "password", type: "password" },
          ]} submitLabel="Sign in"
          onSubmit={async ({username, password}) => {
            const response = await userService.createSession({
              username, password
            })
            if (response.status == 201) {
              console.log("user signed in")
            } else {
              const data = await response.json()
              console.log(data)
            }
          }}
        />
      </div>
      <Link to="/signup" className="text-green-500 text-sm underline">
        Create account
        </Link>
    </FormContainer>
  );
}
