import UserDropdown from "@/components/layout/user-dropdown";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BellIcon, ShoppingCartIcon } from "lucide-react";

export default function NavbarUser() {
  return (
    <section className="flex items-center-safe gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <ShoppingCartIcon />
            </Button>
          </TooltipTrigger>

          <TooltipContent>Cart</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <BellIcon />
            </Button>
          </TooltipTrigger>

          <TooltipContent>Notifications</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <UserDropdown />
    </section>
  );
}
