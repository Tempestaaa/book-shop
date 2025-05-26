import { Button } from "@/components/ui/button";

export default function SocialButtons() {
  return (
    <div className="space-y-2">
      <div className="text-center">or</div>
      <div className="flex items-center-safe justify-center-safe gap-4 *:flex-1">
        <Button type="button">Facebook</Button>
        <Button type="button">Google</Button>
      </div>
    </div>
  );
}
