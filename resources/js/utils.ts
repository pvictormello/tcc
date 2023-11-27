export const formatDate = (date: Date) => {
  const langugage = localStorage.getItem("language") || "pt-BR";

  return Intl.DateTimeFormat(langugage, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
};

export const formatDateTime = (date: Date) => {
  const langugage = localStorage.getItem("language") || "pt-BR";

  return Intl.DateTimeFormat(langugage, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);
};
