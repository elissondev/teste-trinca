export const formattedDate = (dateString: string) => {
    console.log('dateString', dateString)
    // Adiciona a hora de meia-noite à string de data
    const midnightDate = new Date(dateString + 'T00:00:00');

    // Formata a data usando toLocaleDateString
    return midnightDate.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
    });
};