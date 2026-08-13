// Formats a UTC ISO timestamp (like the one from GraphQL) into
// readable Indian Standard Time (IST, UTC+5:30) for display.
export function formatIST(isoString: string): string {
  return new Date(isoString).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}