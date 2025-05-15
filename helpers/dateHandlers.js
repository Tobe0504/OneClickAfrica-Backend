const { parseISO, isValid, parse } = require("date-fns");
const { TIMEZONE_MAP } = require("../data/dates");

function normalizePubDate(pubDateStr) {
  if (!pubDateStr) return null;
  let normalized = pubDateStr.trim();
  for (const [tz, offset] of Object.entries(TIMEZONE_MAP)) {
    const regex = new RegExp(`\\b${tz}\\b`, "i");
    normalized = normalized.replace(regex, offset);
  }
  normalized = normalized.replace(/\s+/g, " ");
  return normalized;
}

function parseRssDate(pubDateStr) {
  if (!pubDateStr) return new Date();

  const normalized = normalizePubDate(pubDateStr);

  const formats = [
    "EEE, dd MMM yyyy HH:mm:ss xxxx",
    "EEE, dd MMM yyyy HH:mm:ss z",
    "EEE, dd MMM yyyy HH:mm:ss",
    "dd MMM yyyy HH:mm:ss xxxx",
    "EEE dd MMM yyyy HH:mm:ss xxxx",
    "yyyy-MM-dd HH:mm:ss",
  ];

  for (const formatStr of formats) {
    const parsed = parse(normalized, formatStr, new Date());
    if (isValid(parsed)) {
      return parsed;
    }
  }

  const isoParsed = parseISO(normalized);
  if (isValid(isoParsed)) {
    return isoParsed;
  }

  const nativeParsed = new Date(normalized);
  if (isValid(nativeParsed)) {
    return nativeParsed;
  }

  console.warn(
    `Failed to parse date: "${pubDateStr}" (normalized: "${normalized}")`
  );
  return new Date();
}

module.exports = {
  normalizePubDate,
  parseRssDate,
};
