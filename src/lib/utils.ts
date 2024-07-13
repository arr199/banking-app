import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): any {
  return twMerge(clsx(inputs));
}

export function formatPrice(n: number): string {
  const number = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);

  return number;
}

export function hideNumber(number: number): string {
  const str = number.toString();
  return `**** **** **** ${str.slice(-4)}`;
}
