import { cx } from "classix";

export function cn(...inputs: Parameters<typeof cx>) {
  return cx(...inputs);
}
