import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(n: number) {
  const number = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}
