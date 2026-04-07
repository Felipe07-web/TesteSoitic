import React from "react";

export const VisaoInicio = ({ stats }) => {
  return (
    <div className="tab-view fade-in">
      <section className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Geral</span>
          <span className="stat-value">{stats.total}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Confirmados</span>
          <span className="stat-value" style={{ color: "hsl(var(--status-confirmed-text))" }}>{stats.confirmed}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Pendentes</span>
          <span className="stat-value" style={{ color: "hsl(var(--status-pending-text))" }}>{stats.pending}</span>
        </div>
      </section>

      <section className="dashboard-card" style={{ marginTop: '24px', padding: '32px', textAlign: 'center' }}>
        <h3>Bem-vindo de volta, Dr. Felipe</h3>
        <p>Você tem {stats.pending} agendamentos pendentes para revisão hoje.</p>
      </section>
    </div>
  );
};
