import SocialButtons from "@/components/auth/social-buttons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterForm() {
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

      <label className="flex flex-col gap-1">
        <span className="font-bold">Confirm password</span>
        <Input type="password" placeholder="******" />
      </label>

      <Button type="submit" className="mt-3">
        Register
      </Button>

      <SocialButtons />

      <div className="mt-auto text-center text-sm text-muted">
        Already have an account?
        <span className="font-bold text-foreground hover:underline underline-offset-2 ml-1">
          <Link href="/login">Login</Link>
        </span>
      </div>
    </form>
  );
}
