import { twMerge } from "tailwind-merge";

type ClassPart = string | false | null | undefined;

export function cn(...parts: ClassPart[]): string {
  return twMerge(parts.filter(Boolean).join(" "));
}
