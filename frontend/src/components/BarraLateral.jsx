import React from "react";
import { IconCalendar, IconHome, IconUsers, IconSettings } from "./Icones";

export const BarraLateral = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div style={{ background: "hsl(var(--primary))", padding: "8px", borderRadius: "10px", color: "white" }}>
          <IconCalendar />
        </div>
        <span>SOITIC Health</span>
      </div>

      <nav className="nav-links">
        <button
          className={`nav-item ${activeTab === 'inicio' ? 'active' : ''}`}
          onClick={() => setActiveTab('inicio')}
        >
          <IconHome /> <span>Início</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'pacientes' ? 'active' : ''}`}
          onClick={() => setActiveTab('pacientes')}
        >
          <IconUsers /> <span>Pacientes</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'agendamentos' ? 'active' : ''}`}
          onClick={() => setActiveTab('agendamentos')}
        >
          <IconCalendar /> <span>Agendamentos</span>
        </button>
      </nav>
    </aside>
  );
};
