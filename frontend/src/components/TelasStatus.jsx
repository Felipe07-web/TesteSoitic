import React from "react";
import { IconCalendar, IconAlert } from "./Icones";

export const TelaCarregamento = () => (
  <div className="loading-container fade-in">
    <div className="logo" style={{ marginBottom: '24px', justifyContent: 'center' }}>
      <div style={{ background: "hsl(var(--primary))", padding: "12px", borderRadius: "12px", color: "white" }}>
        <IconCalendar />
      </div>
      <span style={{ fontSize: '1.5rem' }}>SOITIC Health</span>
    </div>
    <div className="spinner"></div>
    <div style={{ marginTop: '16px' }}>
      <p style={{ fontWeight: '600', color: 'hsl(var(--text-main))' }}>
        Iniciando serviços médicos...
      </p>
      <p style={{ marginTop: '8px', fontSize: '0.875rem', color: 'hsl(var(--text-muted))', maxWidth: '300px', margin: '8px auto 0' }}>
        O container Docker do backend está subindo. Por favor, aguarde alguns instantes enquanto preparamos os dados.
      </p>
    </div>
  </div>
);

export const TelaErro = ({ error }) => (
  <div className="error-container fade-in">
    <IconAlert />
    <h2>Conexão não estabelecida</h2>
    <p>Não foi possível comunicar com o servidor de agendamentos no momento.</p>
    <p className="error-hint">
      <strong>Dica:</strong> Se você acabou de rodar o comando docker, o banco de dados e a API podem levar alguns segundos para inicializar completamente.
    </p>
    <button className="primary-button" onClick={() => window.location.reload()}>
      Tentar reconectar agora
    </button>
  </div>
);
