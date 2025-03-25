import { AuthForm } from "./AuthForm";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center">
      <AuthForm
        fields={[
          { label: "User Name", type: "text" },
          { label: "password", type: "password" },
        ]} submitLabel="Sign in"
      />
    </div>
  );
}
