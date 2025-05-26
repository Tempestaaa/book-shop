import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ForgetPasswordForm() {
  return (
    <form className="flex flex-col gap-2 h-full">
      <label className="flex flex-col gap-1">
        <span className="font-bold">Username</span>
        <Input placeholder="Enter username" />
      </label>

      <Button type="submit" className="mt-3">
        Submit
      </Button>

      <Link
        href="/login"
        className="mt-auto mx-auto w-fit text-center text-sm text-muted hover:text-foreground hover:underline underline-offset-2 duration-300"
      >
        Back to login
      </Link>
    </form>
  );
}
