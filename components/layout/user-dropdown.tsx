import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userMenu } from "@/data/common";
import { User2Icon } from "lucide-react";
import Link from "next/link";

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-10">
          <AvatarImage />
          <AvatarFallback className="bg-muted/60">
            <User2Icon className="size-4" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel className="font-bold">Username</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userMenu.map((item) => (
          <DropdownMenuItem
            key={item.href}
            asChild
            className="cursor-pointer hover:text-background hover:bg-foreground duration-300"
          >
            <Link href={item.href}>{item.name}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="cursor-pointer hover:text-background hover:bg-foreground duration-300"
        >
          <Link href="/login">Login</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
