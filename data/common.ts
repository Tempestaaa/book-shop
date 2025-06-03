import genres from "@/data/genre";
import { BookGenre } from "@/types/book.type";
import { Menu, Option } from "@/types/common.type";
import {
  HeartIcon,
  LogsIcon,
  LucideIcon,
  SettingsIcon,
  User2Icon,
} from "lucide-react";

export const navbarMenu: Menu<BookGenre>[] = [
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Genres",
    href: "/shop",
    children: genres,
  },
  {
    name: "About",
    href: "/about",
  },
];

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

export const pageFilter: { label: string; min: number; max: number }[] = [
  { label: "Under 100 pages", min: 0, max: 99 },
  { label: "100 - 300 pages", min: 100, max: 300 },
  { label: "301 - 500 pages", min: 301, max: 500 },
  { label: "501 - 1000 pages", min: 501, max: 1000 },
  { label: "Over 1000 pages", min: 1001, max: Number.MAX_SAFE_INTEGER },
];
