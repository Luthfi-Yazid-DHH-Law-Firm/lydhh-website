export const dateFormatter = (timestamp?: string | null) => {
  return new Date(timestamp!).toLocaleDateString("en-EN", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  });
};
