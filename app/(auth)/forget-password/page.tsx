import AuthCard from "@/components/auth/auth-card";
import ForgetPasswordForm from "@/components/auth/forget-password-form";

export default function ForgetPasswordPage() {
  return (
    <div>
      <AuthCard label="Forget password" isReversed>
        <ForgetPasswordForm />
      </AuthCard>
    </div>
  );
}
