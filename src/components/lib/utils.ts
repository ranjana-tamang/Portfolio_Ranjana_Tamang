import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DOMPurify from "dompurify";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const sanitizeHtmlContent = (
  value: string,
  ALLOWED_ATTR: string[] = [],
  ALLOWED_TAGS: string[] = [],
) => {
  return DOMPurify.sanitize(value, {
    ALLOWED_ATTR: ALLOWED_ATTR,
    ALLOWED_TAGS: ALLOWED_TAGS,
  });
};
