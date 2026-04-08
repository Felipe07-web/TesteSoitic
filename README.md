# 🩺 Medical Dashboard - Grupo SOITIC

Este projeto é uma solução  para o desafio técnico de Desenvolvedor Web, focado em alta performance, arquitetura modular e uma experiência de usuário (UX) de nível empresarial para gestão de agendamentos médicos.

---

## 🚀 Como Rodar o Projeto (Quick Start)

O projeto está totalmente containerizado com **Docker**, garantindo que ele funcione em qualquer máquina com zero configuração manual.

1.  **Pré-requisitos**: Ter o [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e rodando.
2.  **Comando único**: Na raiz do projeto, execute:
    ```bash
    docker compose up -d --build
    ```
3.  **Acesse no Navegador**:
    - **Frontend**: [http://localhost:5173](http://localhost:5173)
    - **API Backend**: [http://localhost:8080/api/appointments](http://localhost:8080/api/appointments)

*Nota: Na primeira execução, o Docker instalará automaticamente todas as dependências (Laravel e Node). Aguarde alguns instantes até que as portas estejam liberadas.*

---

## 🛠️ Tecnologias e Justificativas

Escolhemos uma "Stack" moderna e robusta para demonstrar domínio técnico em diferentes camadas:

### 1. Frontend: React.js + Vite
- **Por que?**: O React permite uma interface reativa e componentizada. O Vite foi escolhido por ser o "build tool" mais rápido da atualidade, proporcionando um ciclo de desenvolvimento ágil e performance superior no carregamento das páginas.

### 2. Backend: Laravel (PHP 8.4)
- **Por que?**: Optamos por Laravel para demonstrar conhecimento em um framework de mercado robusto. Ele gerencia as rotas da API e a lógica de negócios de forma elegante e segura.

### 3. Estilização: Vanilla CSS + Design System Customizado
- **Por que?**: Em vez de frameworks prontos (como Bootstrap/Tailwind), utilizamos **CSS Puro com Variáveis Globais (:root)**. Isso demonstra maestria em design de interfaces, garantindo um código leve, sem dependências externas e com controle total sobre cada pixel e animação.

### 4. Infraestrutura: Docker & Docker Compose
- **Por que?**: Para eliminar o problema do "na minha máquina funciona". O Docker isola o ambiente, garantindo que o avaliador tenha a mesma experiência exata de execução que o desenvolvedor.

---

## 🏗️ Decisões de Arquitetura

### 📱 Responsividade de Elite (Mobile Cards)
Uma das principais decisões foi a transformação das **Tabelas em Cards** no celular. Em telas pequenas, tabelas horizontais são difíceis de ler. Nossa solução quebra a tabela em cartões individuais verticais com rótulos internos, proporcionando uma experiência de uso nativa em smartphones.

### 🧩 Componentização e Clean Code
O Frontend foi dividido em componentes especializados (📂 `src/components/`), facilitando a manutenção e testes. No Backend, implementamos o **Service Layer Pattern** (`AppointmentService`), isolando a lógica de manipulação de dados (JSON) do controlador da API.

### 🌓 Design System Adaptativo
Implementamos um sistema de temas (Light/Dark Mode) nativo, onde todas as cores mudam harmoniosamente através de variáveis CSS, sem a necessidade de recarregar a página ou usar bibliotecas pesadas.

---

## 📊 Funcionalidades Implementadas
- **Dashboard de Visão Geral**: Estatísticas dinâmicas (Total, Confirmados, Pendentes).
- **Filtros Avançados**: Busca combinada por nome, data, tipo e status.
- **Gestão de Pacientes**: Agrupamento inteligente para visualização da base de clientes única.
- **Sidebar Retrátil**: Menu lateral com animações suaves e modo colapsado para ganhar espaço.

---
*Projeto desenvolvido com foco em excelência técnica para o processo seletivo do Grupo SOITIC.*
