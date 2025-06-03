import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatSearchParams = (name: string) =>
  name.toLowerCase().split(" ").join("-");

export const reverseFormatSearchParams = (name: string) =>
  name.toLowerCase().split("-").join(" ");

export const formatPrice = (price: number) => {
  const hasDecimals = price % 1 !== 0;

  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
    currencySign: "standard",
  }).format(price);
};

export function formatDate(
  date: Date,
  locale: string = "en-US",
  options?: Intl.DateTimeFormatOptions
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat(locale, options || defaultOptions).format(
    date
  );
}
