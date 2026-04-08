# 🩺 Medical Dashboard - Grupo SOITIC

Este projeto é uma solução de alta performance para a gestão de agendamentos médicos, focada em **arquitetura limpa**, modularidade e uma experiência de usuário (UX) de nível empresarial.

---

## 🚀 Como Rodar o Projeto

O projeto está totalmente containerizado com **Docker**, o que significa que você não precisa instalar PHP, Node e outras dependencias  manualmente.

1.  **Pré-requisito**: Certifique-se de que o [Docker Desktop](https://www.docker.com/products/docker-desktop/) está instalado e em execução.
2.  **Execução**: Abra o terminal na raiz do projeto e execute o comando abaixo:
    ```bash
    docker compose up -d --build
    ```
3.  **Acesso**:
    - **Painel (Frontend)**: [http://localhost:5173](http://localhost:5173)
    - **API (Backend)**: [http://localhost:8080/api/appointments](http://localhost:8080/api/appointments)

> [!IMPORTANT]
> Na primeira execução, o Docker instalará todas as dependências automaticamente. Isso pode levar alguns minutos. Se os dados não aparecerem de imediato, aguarde o término da instalação no terminal.

---

## 🏗️ Arquitetura e Decisões Técnicas

- **Frontend Modular**: CSS estruturado em módulos (`variables`, `base`, `components`, `responsive`) para máxima manutenibilidade.
- **Camada de Inteligência (Custom Hooks)**: Toda a lógica de filtros e processamento de dados está isolada no hook `useAppointments.js`.
- **Camada de Serviço (API Service)**: Centralização das chamadas HTTP no arquivo `services/api.js`, seguindo o princípio de responsabilidade única.
- **Design System Customizado**: Interface responsiva com modo Dark/Light nativo via variáveis CSS, sem dependências de frameworks pesados.

---

## 🛠️ Tecnologias Utilizadas
- **React.js + Vite** (Frontend Rápido)
- **Laravel** (Backend Robusto)
- **Vanilla CSS** (Design de Elite)
- **Docker (Infraestrutura Imutável)**: A escolha do Docker foi estratégica para facilitar a execução do projeto. Com ele, não é necessário o trabalho de instalar PHP, Composer, Node ou outras dependências manualmente na máquina — tudo é configurado e executado através de um único comando.

---
*Projeto desenvolvido com foco em excelência técnica para o processo seletivo do Grupo SOITIC.*
