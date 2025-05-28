import { Option, Sort } from "@/types/common.type";
import {
  HeartIcon,
  LogsIcon,
  LucideIcon,
  SettingsIcon,
  User2Icon,
} from "lucide-react";

export const userMenu: (Option & { icon: LucideIcon })[] = [
  {
    name: "Profile",
    icon: User2Icon,
    href: "/account/profile",
  },
  {
    name: "Orders",
    icon: LogsIcon,
    href: "/account/orders",
  },
  {
    name: "Wishlist",
    icon: HeartIcon,
    href: "/account/wishlist",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    href: "/account/settings",
  },
];
