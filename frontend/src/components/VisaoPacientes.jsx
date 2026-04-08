import React from "react";
import { formatDate } from "../utils/formatters";

export const VisaoPacientes = ({ patients }) => {
  return (
    <div className="tab-view fade-in">
      <section className="dashboard-card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nome do Paciente</th>
                <th>Último Agendamento</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, i) => (
                <tr key={i}>
                  <td data-label="Paciente" style={{ fontWeight: '600' }}>{patient.name}</td>
                  <td data-label="Último Agendamento">{formatDate(patient.lastAppointment)}</td>
                  <td data-label="Status"><span className="badge confirmado">Ativo</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
