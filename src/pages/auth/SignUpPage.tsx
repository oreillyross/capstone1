import { Link } from "react-router";
import { AuthForm } from "./AuthForm";
import { FormContainer } from "./FormContainer";

export default function SignUpPage() {
  return (
    <FormContainer>
      <div className="flex justify-center items-center">
        <AuthForm
          fields={[
            { label: "User Name", type: "text" },
            { label: "password", type: "password" },
            { label: "Confirm password", type: "password" },
          ]}
          submitLabel="Create Account"
          onSubmit={(values) => {
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
