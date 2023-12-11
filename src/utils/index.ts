export const formattedDate = (date: Date) => new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
});