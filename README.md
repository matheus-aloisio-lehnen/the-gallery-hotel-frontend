🏨 The Gallery Hotel - Frontend

Interface administrativa e de usuário para o sistema de gestão hoteleira The Gallery Hotel. Este projeto foi construído com foco em performance, componentização moderna e experiência de usuário fluida.


🚀 Tecnologias e Decisões Técnicas

Este projeto utiliza o que há de mais moderno no ecossistema Angular:

Angular 18: Uso de Standalone Components para uma arquitetura mais leve e modular, eliminando a necessidade de NgModules complexos.

Gestão de Estado & Reatividade: Implementação de Signals (nova API do Angular) para uma detecção de mudanças mais eficiente e declarativa.

Roteamento Avançado: Configuração de rotas lazy-loaded para otimizar o bundle inicial.

Consumo de API: Centralização de chamadas via HttpClient com tipagem forte através de interfaces TypeScript.

UI/UX: Estilização modular com suporte a responsividade.


🛠️ Funcionalidades Principais

Dashboard Administrativo: Visualização geral do status do hotel.

Gestão de Quartos: Listagem, criação e edição de acomodações.

Controle de Hóspedes: Interface para gerenciamento de clientes.

Sistema de Reservas: Fluxo completo para agendamento de estadias.

Integração de Localização: Mapa integrado para exibição da unidade.


📂 Estrutura do Projeto

A arquitetura segue o padrão de Core/Shared/Features, garantindo escalabilidade:

src/
 ├── app/
 │    ├── components/    # Componentes reutilizáveis (UI)
 │    ├── pages/         # Views principais (Dashboard, Rooms, etc.)
 │    ├── services/      # Lógica de negócio e comunicação com API
 │    ├── models/        # Interfaces e Tipagens (DTOs)
 │    └── app.routes.ts  # Configuração de roteamento (Lazy Loading)
 └── assets/             # Recursos estáticos (imagens, ícones)

 
🔧 Instalação e Execução

Para rodar este projeto localmente, você precisará do Node.js (recomendado v18+) e do Angular CLI.

Clone o repositório:

git clone https://github.com/matheus-aloisio-lehnen/the-gallery-hotel-frontend.git


Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

ng serve

Acesse http://localhost:4200 no seu navegador.


🧪 Comandos Úteis

Build de Produção: ng build (Gera os arquivos na pasta dist/).

Testes Unitários: ng test (Executa via Karma).
