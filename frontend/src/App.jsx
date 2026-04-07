import React, { useEffect, useMemo, useState } from "react";
import "./styles/styles.css";

// Importando Componentes
import { BarraLateral } from "./components/BarraLateral";
import { Cabecalho } from "./components/Cabecalho";
import { TelaCarregamento, TelaErro } from "./components/TelasStatus";
import { VisaoInicio } from "./components/VisaoInicio";
import { VisaoPacientes } from "./components/VisaoPacientes";
import { VisaoAgendamentos } from "./components/VisaoAgendamentos";

function formatDate(dateString) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(dateString));
  } catch (e) {
    return dateString;
  }
}

function App() {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [activeTab, setActiveTab] = useState("inicio");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Filtros
  const [filters, setFilters] = useState({
    name: "",
    date: "",
    type: "",
    status: ""
  });

  useEffect(() => {
    document.documentElement.className = isDarkMode ? "theme-dark" : "";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        const apiBase = import.meta.env.VITE_API_BASE_URL || "";
        const response = await fetch(`${apiBase}/api/appointments`);

        if (!response.ok) {
          throw new Error("Servidor em inicialização.");
        }

        const payload = await response.json();
        setAppointmentsData(Array.isArray(payload.data) ? payload.data : []);
        setLoading(false);
      } catch (err) {
        // Se falhar, tentamos novamente após 3 segundos (enquanto o docker sobe)
        // Isso mantém o usuário na tela de "Iniciando serviços"
        setTimeout(loadAppointments, 3000);
      }
    }

    loadAppointments();
  }, []);

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

  const stats = useMemo(() => {
    const confirmed = appointmentsData.filter((item) => item.status === "confirmado").length;
    const pending = appointmentsData.filter((item) => item.status === "pendente").length;
    const canceled = appointmentsData.filter((item) => item.status === "cancelado").length;

    return { total: appointmentsData.length, confirmed, pending, canceled };
  }, [appointmentsData]);

  const filteredAppointments = useMemo(() => {
    return appointmentsData.filter(app => {
      const matchName = !filters.name || app.patientName.toLowerCase().includes(filters.name.toLowerCase());
      const matchStatus = !filters.status || app.status === filters.status;
      const matchType = !filters.type || app.type === filters.type;
      const matchDate = !filters.date || app.appointmentDate.split('T')[0] === filters.date;

      return matchName && matchStatus && matchType && matchDate;
    }).sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));
  }, [appointmentsData, filters]);

  if (loading) return <TelaCarregamento />;
  if (error) return <TelaErro error={error} />;

  return (
    <div className={`app-container ${isDarkMode ? "theme-dark" : ""} ${isSidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <BarraLateral 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed} 
      />

      <main className="main-content">
        <Cabecalho
          title={
            activeTab === 'inicio' ? 'Visão Geral' :
              activeTab === 'pacientes' ? 'Meus Pacientes' : 'Gestão de Agendamentos'
          }
          subTitle="Portal de gestão médica do Grupo SOITIC."
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />

        {activeTab === 'inicio' && <VisaoInicio stats={stats} />}
        {activeTab === 'pacientes' && <VisaoPacientes patients={patients} formatDate={formatDate} />}
        {activeTab === 'agendamentos' && (
          <VisaoAgendamentos
            filteredAppointments={filteredAppointments}
            filters={filters}
            setFilters={setFilters}
            formatDate={formatDate}
          />
        )}
      </main>
    </div>
  );
}

export default App;
