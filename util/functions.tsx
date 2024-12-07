import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export function modulo(n: number, m: number) {
  // will deal correctly with negative numbers, unlike the "%" operator
  return ((n % m) + m) % m
}
