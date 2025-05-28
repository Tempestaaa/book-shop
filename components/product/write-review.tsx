import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PenLineIcon, User2Icon } from "lucide-react";
import Link from "next/link";

export default function WriteReview() {
  return (
    <section className="flex flex-col items-center-safe justify-center-safe gap-2">
      <Avatar className="size-16 shadow">
        <AvatarImage />
        <AvatarFallback>
          <User2Icon />
        </AvatarFallback>
      </Avatar>

      <div className="text-5xl font-heading">What do you think?</div>

      <Link href={`/shop/123/review`}>
        <Button className="mt-2 !px-6">
          <PenLineIcon />
          <span>Write a Review</span>
        </Button>
      </Link>
    </section>
  );
}
