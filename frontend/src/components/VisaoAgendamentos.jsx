import React from "react";
import { IconSearch, IconCalendar } from "./Icones";
import { formatDate } from "../utils/formatters";

export const VisaoAgendamentos = ({ filteredAppointments, filters, setFilters }) => {
  return (
    <div className="tab-view fade-in">
      <section className="dashboard-card">
        <div className="toolbar filters">
          <div className="filter-group-grid">
            <div className="filter-item">
              <label>Nome do Paciente</label>
              <div className="input-with-icon">
                <IconSearch />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={filters.name}
                  onChange={(e) => setFilters(f => ({ ...f, name: e.target.value }))}
                />
              </div>
            </div>
            <div className="filter-item">
              <label>Data</label>
              <div className="input-with-icon">
                <IconCalendar />
                <input
                  type="date"
                  value={filters.date}
                  onChange={(e) => setFilters(f => ({ ...f, date: e.target.value }))}
                />
              </div>
            </div>
            <div className="filter-item">
              <label>Tipo</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters(f => ({ ...f, type: e.target.value }))}
              >
                <option value="">Todos</option>
                <option value="primeira consulta">Primeira Consulta</option>
                <option value="retorno">Retorno</option>
                <option value="exame">Exame</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters(f => ({ ...f, status: e.target.value }))}
              >
                <option value="">Todos</option>
                <option value="confirmado">Confirmado</option>
                <option value="pendente">Pendente</option>
                <option value="cancelado">Cancelado</option>
              </select>
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Data e Hora</th>
                <th>Tipo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((app) => (
                <tr key={app.id}>
                  <td data-label="Paciente" style={{ fontWeight: '500' }}>{app.patientName}</td>
                  <td data-label="Data e Hora">{formatDate(app.appointmentDate)}</td>
                  <td data-label="Tipo">{app.type}</td>
                  <td data-label="Status">
                    <span className={`badge ${app.status}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredAppointments.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center', padding: '48px', color: 'hsl(var(--text-muted))' }}>
                    Nenhum agendamento encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
