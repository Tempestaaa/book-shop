import { Option, Sort } from "@/types/common.type";

export const shopSortOptions: Sort[] = [
  {
    label: "Name",
    children: [
      {
        name: "Alphabetical",
        value: "alphabetical",
      },
      {
        name: "Reverse Alphabetical",
        value: "reverse-alphabetical",
      },
    ],
  },
  {
    label: "Price",
    children: [
      {
        name: "High to Low",
        value: "desc",
      },
      {
        name: "Low to High",
        value: "asc",
      },
    ],
  },
];

export const reviewSortOptions: Sort[] = [
  {
    label: "Date",
    children: [
      {
        name: "Newest",
        value: "newest",
      },
      {
        name: "Oldest",
        value: "oldest",
      },
    ],
  },
  {
    label: "Rating",
    children: [
      {
        name: "High to Low",
        value: "desc",
      },
      {
        name: "Low to High",
        value: "asc",
      },
    ],
  },
];

export const userMenu: Option[] = [
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "Wishlist",
    href: "/wishlist",
  },
  {
    name: "Settings",
    href: "/settings",
  },
];
