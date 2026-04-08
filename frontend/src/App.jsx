import React, { useEffect, useState } from "react";
import "./styles/styles.css";

// Importando Hooks Customizados
import { useAppointments } from "./hooks/useAppointments";

// Importando Componentes
import { BarraLateral } from "./components/BarraLateral";
import { Cabecalho } from "./components/Cabecalho";
import { TelaCarregamento, TelaErro } from "./components/TelasStatus";
import { VisaoInicio } from "./components/VisaoInicio";
import { VisaoPacientes } from "./components/VisaoPacientes";
import { VisaoAgendamentos } from "./components/VisaoAgendamentos";

function App() {
  // Estados da interface (UI)
  const [activeTab, setActiveTab] = useState("inicio");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Lógica de dados isolada no Hook
  const {
    loading,
    error,
    patients,
    stats,
    filters,
    setFilters,
    filteredAppointments
  } = useAppointments();

  // Efeito para sincronizar o tema dark mode
  useEffect(() => {
    document.documentElement.className = isDarkMode ? "theme-dark" : "";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  if (loading) return <TelaCarregamento />;
  if (error) return <TelaErro error={error} />;

  return (
    <div className={`app-container ${isDarkMode ? "theme-dark" : ""} ${isSidebarCollapsed ? "sidebar-collapsed" : ""}`}>
      <BarraLateral
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
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
        {activeTab === 'pacientes' && <VisaoPacientes patients={patients} />}
        {activeTab === 'agendamentos' && (
          <VisaoAgendamentos
            filteredAppointments={filteredAppointments}
            filters={filters}
            setFilters={setFilters}
          />
        )}
      </main>
    </div>
  );
}

export default App;
