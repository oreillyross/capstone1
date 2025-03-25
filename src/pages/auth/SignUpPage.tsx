import { AuthForm } from "./AuthForm";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center">
      <AuthForm
        fields={[
          { label: "User Name", type: "text" },
          { label: "password", type: "password" },
          { label: "Confirm password", type: "password" },
        ]} submitLabel="Create Account"
      />
    </div>
  );
}
