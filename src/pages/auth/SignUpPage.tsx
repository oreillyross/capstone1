import { Link } from "react-router";
import { AuthForm } from "./AuthForm";
import { FormContainer } from "./FormContainer";
import {useState} from "react"
import * as userService from "../../services/user"

export default function SignUpPage() {
  const [error, setError] = useState("ghgh")
    
  return (
    <FormContainer>
      <div className="flex justify-center items-center">
        {error && <div>{error}</div>}
        <AuthForm
          fields={[
            { label: "User Name", type: "text" },
            { label: "password", type: "password" },
            { label: "Confirm password", type: "password" },
          ]}
          submitLabel="Create Account"
          onSubmit={(values) => {
            if (values['User Name'].length < 4) {
              
            }
            console.log("Here you go, ", values)
          }}
        />
        
      </div>
      <Link to="/" className="text-green-500 text-sm underline">
        Sign up
        </Link>
    </FormContainer>
  );
}
