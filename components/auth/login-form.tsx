import SocialButtons from "@/components/auth/social-buttons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-2 h-full">
      <label className="flex flex-col gap-1">
        <span className="font-bold">Username</span>
        <Input placeholder="Enter username" />
      </label>

      <label className="flex flex-col gap-1">
        <span className="font-bold">Password</span>
        <Input type="password" placeholder="******" />
      </label>

      <Link
        href="/forget-password"
        className="ml-auto mb-2 text-sm text-muted underline underline-offset-2 hover:text-foreground duration-300"
      >
        Forget your password?
      </Link>

      <Button type="submit" className="mt-1">
        Login
      </Button>

      <SocialButtons />

      <div className="mt-auto text-center text-sm text-muted">
        Don't have an account?
        <span className="font-bold text-foreground hover:underline underline-offset-2 ml-1">
          <Link href="/register">Create one</Link>
        </span>
      </div>
    </form>
  );
}
