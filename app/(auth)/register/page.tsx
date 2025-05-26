import AuthCard from "@/components/auth/auth-card";
import RegisterForm from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <div>
      <AuthCard label="Create account" isReversed>
        <RegisterForm />
      </AuthCard>
    </div>
  );
}
