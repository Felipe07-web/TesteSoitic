import { useState, useEffect, useMemo } from "react";
import { appointmentService } from "../services/api";

/**
 * Hook customizado para gerenciar a lógica de dados de agendamentos.
 * Utiliza a camada de serviço (api.js) para buscar os dados.
 */
export function useAppointments() {
    const [appointmentsData, setAppointmentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Filtros da interface
    const [filters, setFilters] = useState({
        name: "",
        date: "",
        type: "",
        status: ""
    });

    useEffect(() => {
        async function loadData() {
            try {
                const data = await appointmentService.getAppointments();
                setAppointmentsData(data);
                setLoading(false);
                setError(""); // Limpa erro se a busca for bem-sucedida
            } catch (err) {
                // Tentativa de reconexão automática (ex: Docker subindo)
                setError(err.message);
                setTimeout(loadData, 3000);
            }
        }

        loadData();
    }, []);

    // Gera lista única de pacientes
    const patients = useMemo(() => {
        const list = [];
        const names = new Set();

        appointmentsData.forEach(app => {
            if (!names.has(app.patientName)) {
                names.add(app.patientName);
                list.push({
                    name: app.patientName,
                    lastAppointment: app.appointmentDate
                });
            }
        });

        return list.sort((a, b) => a.name.localeCompare(b.name));
    }, [appointmentsData]);

    // Calcula estatísticas do dashboard
    const stats = useMemo(() => {
        const confirmed = appointmentsData.filter((item) => item.status === "confirmado").length;
        const pending = appointmentsData.filter((item) => item.status === "pendente").length;
        const canceled = appointmentsData.filter((item) => item.status === "cancelado").length;

        return { total: appointmentsData.length, confirmed, pending, canceled };
    }, [appointmentsData]);

    // Filtra agendamentos baseado nos inputs do usuário
    const filteredAppointments = useMemo(() => {
        return appointmentsData.filter(app => {
            const matchName = !filters.name || app.patientName.toLowerCase().includes(filters.name.toLowerCase());
            const matchStatus = !filters.status || app.status === filters.status;
            const matchType = !filters.type || app.type === filters.type;
            const matchDate = !filters.date || app.appointmentDate.split('T')[0] === filters.date;

            return matchName && matchStatus && matchType && matchDate;
        }).sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));
    }, [appointmentsData, filters]);

    return {
        loading,
        error,
        patients,
        stats,
        filters,
        setFilters,
        filteredAppointments
    };
}
