/**
 * Validates that the provided input is either a valid email address
 * or a valid international phone number.
 */
export function isValidEmailOrPhone(input: string): boolean {
  if (!input || typeof input !== "string") return false;
  const trimmed = input.trim();
  if (trimmed.length < 5) return false;

  // 1. Email check: standard RFC-compliant pattern
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (emailRegex.test(trimmed)) {
    return true;
  }

  // 2. Phone check: must NOT contain any alphabetic characters (Latin, Cyrillic, etc.)
  if (/[a-zA-Z\p{L}]/u.test(trimmed.replace(/[+]/g, ""))) {
    return false;
  }

  // Allowed characters: +, -, (, ), spaces, dots, slashes, and numbers
  const validPhoneChars = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9()]*$/;
  if (!validPhoneChars.test(trimmed)) {
    return false;
  }

  // Count digits: standard E.164 phone numbers have 7 to 15 digits
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}
