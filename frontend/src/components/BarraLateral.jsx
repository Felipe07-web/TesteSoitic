import React from "react";
import { IconCalendar, IconHome, IconUsers, IconMenu } from "./Icones";

export const BarraLateral = ({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className={`logo ${isCollapsed ? 'hide-text' : ''}`}>
          <div style={{ background: "hsl(var(--primary))", padding: "8px", borderRadius: "10px", color: "white", flexShrink: 0 }}>
            <IconCalendar />
          </div>
          <span className="logo-text">SOITIC Health</span>
        </div>

        <button 
          className="sidebar-toggle-btn" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expandir menu" : "Recolher menu"}
        >
          <IconMenu />
        </button>
      </div>

      <nav className="nav-links">
        <button
          className={`nav-item ${activeTab === 'inicio' ? 'active' : ''}`}
          onClick={() => setActiveTab('inicio')}
          title={isCollapsed ? "Início" : ""}
        >
          <IconHome /> <span className="nav-label">Início</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'pacientes' ? 'active' : ''}`}
          onClick={() => setActiveTab('pacientes')}
          title={isCollapsed ? "Pacientes" : ""}
        >
          <IconUsers /> <span className="nav-label">Pacientes</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'agendamentos' ? 'active' : ''}`}
          onClick={() => setActiveTab('agendamentos')}
          title={isCollapsed ? "Agendamentos" : ""}
        >
          <IconCalendar /> <span className="nav-label">Agendamentos</span>
        </button>
      </nav>
    </aside>
  );
};
