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

export interface SpamCheckParams {
  name?: string;
  contact?: string;
  honeypot?: string;
  formLoadedAt?: number | string;
}

/**
 * Multi-layer automated bot and spam heuristic detection.
 * Catches honeypot traps, sub-second headless submissions,
 * Gmail dot-trick spam generators, and random consonant gibberish.
 */
export function isLikelyBotSubmission(params: SpamCheckParams): { isBot: boolean; reason?: string } {
  // 1. Honeypot check: hidden fields filled by automated web crawlers
  if (params.honeypot && params.honeypot.trim().length > 0) {
    return { isBot: true, reason: "honeypot-filled" };
  }

  // 2. Time-gate check: human configuration and typing takes at least 2.0s
  if (params.formLoadedAt) {
    const loadedAt = typeof params.formLoadedAt === "string" ? parseInt(params.formLoadedAt, 10) : params.formLoadedAt;
    if (!isNaN(loadedAt) && loadedAt > 0) {
      const elapsed = Date.now() - loadedAt;
      if (elapsed < 2000) {
        return { isBot: true, reason: `submitted-too-fast (${elapsed}ms)` };
      }
      if (elapsed > 7 * 24 * 60 * 60 * 1000) {
        return { isBot: true, reason: "stale-form-timestamp" };
      }
    }
  }

  // 3. Email dot-trick spam pattern (e.g. u.su.wu.ji.taz0.2@gmail.com, eseq.ag.a.d810@gmail.com)
  if (params.contact && params.contact.includes("@")) {
    const atIndex = params.contact.indexOf("@");
    const localPart = params.contact.slice(0, atIndex).trim();
    const dotsCount = (localPart.match(/\./g) || []).length;
    // 3 or more dots before '@' is virtually always an automated alias generator
    if (dotsCount >= 3) {
      return { isBot: true, reason: `dot-trick-spam (${dotsCount} dots)` };
    }
    // Consecutive dots in local part
    if (/\.{2,}/.test(localPart)) {
      return { isBot: true, reason: "consecutive-dots-in-email" };
    }
  }

  // 4. Gibberish name detection (unnatural consonant clustering)
  if (params.name && typeof params.name === "string") {
    const cleanName = params.name.trim();
    // 5 or more consecutive consonants (excluding vowel-like y)
    if (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(cleanName)) {
      return { isBot: true, reason: "consonant-cluster-gibberish" };
    }
    // 4 consonants at word boundary unless common clusters (sch, str, spl, spr)
    if (/\b(?!(?:sch|str|spl|spr))[bcdfghjklmnpqrstvwxyz]{4,}/i.test(cleanName)) {
      return { isBot: true, reason: "unnatural-word-start-gibberish" };
    }
  }

  return { isBot: false };
}

