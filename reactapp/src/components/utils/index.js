export function ISOStringConversion(date) {
    const utcDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000); // Convert to UTC
    const isoString = utcDate.toISOString();
    return isoString;
  }