/**
 * Utilitários de formatação para o painel médico.
 */

export function formatDate(dateString) {
    if (!dateString) return "";
    try {
        return new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "short",
            timeStyle: "short"
        }).format(new Date(dateString));
    } catch (e) {
        return dateString;
    }
}
