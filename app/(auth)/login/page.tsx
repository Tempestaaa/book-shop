import AuthCard from "@/components/auth/auth-card";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div>
      <AuthCard label="Welcome back!" showBackHome>
        <LoginForm />
      </AuthCard>
    </div>
  );
}
