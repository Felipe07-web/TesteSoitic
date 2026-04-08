/**
 * Camada de Serviço para comunicação com a API.
 * Isola a lógica de fetch e configurações de rede.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const appointmentService = {
    /**
     * Busca a lista de agendamentos.
     * @returns {Promise<Array>} Lista de agendamentos.
     */
    async getAppointments() {
        const response = await fetch(`${API_BASE_URL}/api/appointments`);
        
        if (!response.ok) {
            throw new Error("Falha ao carregar agendamentos.");
        }
        
        const payload = await response.json();
        return Array.isArray(payload.data) ? payload.data : [];
    }
};
