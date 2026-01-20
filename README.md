🇺🇸
The Gallery Hotel - Frontend


Administrative and user interface for The Gallery Hotel management system. This project was built with a strong focus on performance, modern componentization, and a smooth user experience.



## Technologies and Technical Decisions


This project uses modern Angular ecosystem practices:


Angular 18
Use of Standalone Components to achieve a lighter and more modular architecture, removing the need for complex NgModules.


State Management & Reactivity
Implementation of Signals (Angular’s new API) for more efficient and declarative change detection.


Advanced Routing
Configuration of lazy-loaded routes to optimize the initial bundle size.


API Consumption
Centralized API calls using HttpClient with strong typing through TypeScript interfaces.


UI/UX
Modular styling with responsive design support.



## Core Features


Administrative Dashboard
High-level overview of the hotel’s operational status.


Room Management
Listing, creation, and editing of accommodations.


Guest Management
Interface for managing guest information.


Reservation System
Complete flow for booking and managing stays.


Location Integration
Integrated map for displaying the hotel location.



## Project Structure


The architecture follows the Core/Shared/Features pattern, ensuring scalability:


src/
├── app/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── models/
│   └── app.routes.ts
└── assets/


components
Reusable UI components.

pages
Main views such as Dashboard and Rooms.

services
Business logic and API communication.

models
TypeScript interfaces and DTOs.

app.routes.ts
Routing configuration with lazy loading.

assets
Static resources such as images and icons.



## Installation and Execution


To run this project locally, you will need Node.js (recommended v18+) and the Angular CLI.


Clone the repository:


git clone https://github.com/matheus-aloisio-lehnen/the-gallery-hotel-frontend.git


Install dependencies:


npm install


Start the development server:


ng serve


Access http://localhost:4200 in your browser.



## Useful Commands


Production Build
ng build (Generates files in the dist/ directory).


Unit Tests
ng test (Runs tests using Karma).




🇧🇷
The Gallery Hotel - Frontend


Interface administrativa e de usuário para o sistema de gestão hoteleira The Gallery Hotel. Este projeto foi construído com foco em performance, componentização moderna e experiência de usuário fluida.



## Tecnologias e Decisões Técnicas


Este projeto utiliza práticas modernas do ecossistema Angular:


Angular 18
Uso de Standalone Components para uma arquitetura mais leve e modular, eliminando a necessidade de NgModules complexos.


Gestão de Estado & Reatividade
Implementação de Signals (nova API do Angular) para uma detecção de mudanças mais eficiente e declarativa.


Roteamento Avançado
Configuração de rotas lazy-loaded para otimizar o bundle inicial.


Consumo de API
Centralização de chamadas via HttpClient com tipagem forte através de interfaces TypeScript.


UI/UX
Estilização modular com suporte a responsividade.



## Funcionalidades Principais


Dashboard Administrativo
Visualização geral do status do hotel.


Gestão de Quartos
Listagem, criação e edição de acomodações.


Controle de Hóspedes
Interface para gerenciamento de clientes.


Sistema de Reservas
Fluxo completo para agendamento de estadias.


Integração de Localização
Mapa integrado para exibição da unidade.



## Estrutura do Projeto


A arquitetura segue o padrão de Core/Shared/Features, garantindo escalabilidade:


src/
├── app/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── models/
│   └── app.routes.ts
└── assets/


components
Componentes reutilizáveis de UI.

pages
Views principais como Dashboard e Rooms.

services
Lógica de negócio e comunicação com API.

models
Interfaces e tipagens TypeScript (DTOs).

app.routes.ts
Configuração de rotas com lazy loading.

assets
Recursos estáticos como imagens e ícones.



## Instalação e Execução


Para rodar este projeto localmente, você precisará do Node.js (recomendado v18+) e do Angular CLI.


Clone o repositório:


git clone https://github.com/matheus-aloisio-lehnen/the-gallery-hotel-frontend.git


Instale as dependências:


npm install


Inicie o servidor de desenvolvimento:


ng serve


Acesse http://localhost:4200 no seu navegador.



## Comandos Úteis


Build de Produção
ng build (Gera os arquivos na pasta dist/).


Testes Unitários
ng test (Executa via Karma).
