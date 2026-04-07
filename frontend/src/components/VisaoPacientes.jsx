import React from "react";

export const VisaoPacientes = ({ patients, formatDate }) => {
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
                  <td style={{ fontWeight: '600' }}>{patient.name}</td>
                  <td>{formatDate(patient.lastAppointment)}</td>
                  <td><span className="badge confirmado">Ativo</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
