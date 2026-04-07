# Teste Técnico: Dashboard de Agendamentos Médicos - Grupo SOITIC

Esta é uma solução completa para o desafio técnico de Desenvolvedor Web, apresentando um dashboard moderno e profissional para gestão de pacientes e agendamentos.

## 🚀 Tecnologias Utilizadas

- **Frontend**: React.js com Vite (pela performance e DX superior).
- **Backend**: Laravel 13 (Arquitetura robusta e escalabilidade).
- **Estilização**: CSS Nativo com Design System baseado em variáveis (foco em performance e controle total da UI).
- **Containerização**: Docker e Docker Compose (para padronização do ambiente local).

## 📊 Funcionalidades em Destaque

- **Dashboard Premium**: Interface completa com Sidebar, estatísticas em tempo real e tabelas otimizadas.
- **Filtros Profissionais**: Busca combinatória por Nome, Data, Tipo de Consulta e Status.
- **Gestão de Pacientes**: Aba dedicada com extração inteligente de dados únicos para visualização da base de clientes.
- **Modo Escuro (Dark Mode)**: Implementação nativa via CSS Variables com persistência de preferência.
- **Responsividade Total**: Layout adaptativo utilizando CSS Grid e Flexbox, garantindo usabilidade em qualquer resolução.
- **Arquitetura Modular**: Código 100% componentizado no React para máxima manutenibilidade.

## 🏗️ Arquitetura e Boas Práticas

### Backend (Laravel - O Bônus)
- **Service Layer Pattern**: Isolamento total da lógica de manipulação do arquivo JSON e regras de negócio na classe `AppointmentService`.
- **Dockerização**: Ambiente isolado e reprodutível que garante que o projeto rode em qualquer máquina sem "it works on my machine".

### Frontend (React)
- **Boas Práticas de State Management**: Uso estratégico de `useMemo` para performance em filtros complexos e cálculos de estatísticas, evitando renderizações desnecessárias.
- **Modularização de Componentes**: UI dividida em componentes pequenos e especializados (📂 `src/components/`):
    - `BarraLateral`, `Cabecalho`, `VisaoInicio`, `VisaoPacientes`, `VisaoAgendamentos`, `TelasStatus` e `Icones`.
- **UX Reativa**: Tratamento proativo de estados (Loading com logo, Erro com hint de Docker e botões de reconexão).
- **Estilização Premium**: CSS puro com variáveis globais (Design System), garantindo leveza e controle absoluto sobre o visual.

## 🛠️ Como Rodar o Projeto

Certifique-se de ter o Docker instalado e execute:

```bash
docker compose up -d --build
```

- **Frontend**: `http://localhost:5173`
- **Backend (API)**: `http://localhost:8080/api/appointments`

### Logs (Opcional)
```bash
docker compose logs -f backend
docker compose logs -f frontend
```

---
*Desenvolvido como parte do processo seletivo para o Grupo SOITIC.*
