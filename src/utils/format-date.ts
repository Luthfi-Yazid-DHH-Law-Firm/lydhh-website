/**
 * Converts a timestamp to a formatted date string
 * @param timestamp - ISO string, Date object, or milliseconds timestamp
 * @param options - Intl.DateTimeFormat options for customization
 * @returns Formatted date string
 */
export const formatDate = (
  timestamp: string | number | Date,
  options?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(timestamp);

  // Check if date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  // Default formatting options
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatOptions = options || defaultOptions;

  return new Intl.DateTimeFormat("en-US", formatOptions).format(date);
};

// Alternative format options you can use:

// Short format: "Nov 14, 2025"
export const formatDateShort = (timestamp: string | number | Date): string => {
  return formatDate(timestamp, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Full format: "Friday, November 14, 2025"
export const formatDateFull = (timestamp: string | number | Date): string => {
  return formatDate(timestamp, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Numeric format: "11/14/2025"
export const formatDateNumeric = (timestamp: string | number | Date): string => {
  return formatDate(timestamp, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

// Relative time: "2 days ago", "in 3 hours"
export const formatRelativeTime = (timestamp: string | number | Date): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (Math.abs(diffInSeconds) < 60) {
    return rtf.format(-diffInSeconds, "second");
  } else if (Math.abs(diffInSeconds) < 3600) {
    return rtf.format(-Math.floor(diffInSeconds / 60), "minute");
  } else if (Math.abs(diffInSeconds) < 86400) {
    return rtf.format(-Math.floor(diffInSeconds / 3600), "hour");
  } else if (Math.abs(diffInSeconds) < 2592000) {
    return rtf.format(-Math.floor(diffInSeconds / 86400), "day");
  } else if (Math.abs(diffInSeconds) < 31536000) {
    return rtf.format(-Math.floor(diffInSeconds / 2592000), "month");
  } else {
    return rtf.format(-Math.floor(diffInSeconds / 31536000), "year");
  }
};