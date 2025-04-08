import { Link } from "react-router";
import { AuthForm } from "./AuthForm";
import { FormContainer } from "./FormContainer";
import { useState } from "react";
import * as userService from "services/user";


export default function SignUpPage() {
  const [error, setError] = useState("");

  return (
    <FormContainer>
      {error && <div className="text-red-800 text-lg">{error}</div>}
      <div className="flex justify-center items-center">
        <AuthForm
          fields={[
            { label: "User Name", type: "text" },
            { label: "password", type: "password" },
            { label: "Confirm password", type: "password" },
          ]}
          submitLabel="Create Account"
          onSubmit={async (values: any) => {
            if (values["User Name"].length < 4) {
              setError("Username needs to be more than 4 characters long");
              return;
            }
            if (values.password.length < 4) {
              setError("Password needs to be more than 4 characters long");
              return;
            }
            if (values.password !== values["Confirm password"]) {
              setError("Passwords do not match");
              return;
            }
            const response = await userService.createUser({username: values["User Name"], password: values.password})
            if (response.status === 201) {
              setError("")
              console.log("User created successfully")
            } else {
              console.log(response)
              const data = await response.json()
              setError(data.error)
            }
          }}
        />
      </div>
      <Link to="/" className="text-green-500 text-sm underline">
        Sign up
      </Link>
    </FormContainer>
  );
}
