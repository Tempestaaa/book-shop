import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function NavbarSearch() {
  return (
    <form className="flex items-center-safe gap-2 border-2 border-muted/30 has-[:focus]:border-foreground rounded-full px-4">
      <SearchIcon className="size-4 text-muted" />
      <Input
        placeholder="Search"
        className="w-52 border-transparent shadow-none pl-0 focus:!border-transparent"
      />
    </form>
  );
}
