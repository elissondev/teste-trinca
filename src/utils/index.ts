export const formattedDate = (dateString: string) => {
    // Adiciona a hora de meia-noite à string de data
    const midnightDate = new Date(dateString + 'T00:00:00');

    // Formata a data usando toLocaleDateString
    return midnightDate.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
    });
};

export function formatarMoeda(value: any) {
    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return formatoMoeda.format(value);
}

export function addEllipsis(text: string, limit: number) {
    if (text.length > limit) {
        return text.substring(0, limit) + '...';
    } else {
        return text;
    }
}