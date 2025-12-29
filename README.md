# ⚔️ League of Legends Champions Explorer

> Um explorador de campeões moderno, rápido e elegante, consumindo a API oficial do Data Dragon. Feito com a finalidade de testar os conhecimentos em React e suas ferramentas.

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📖 Sobre o Projeto

O **LoL Champions Explorer** foi desenvolvido para oferecer uma interface limpa e imersiva para visualizar todos os campeões do League of Legends. O projeto busca a última versão disponível do patch automaticamente, garantindo que os dados (nomes, imagens e títulos) estejam sempre atualizados com o jogo oficial.

O foco principal foi criar uma experiência de usuário fluida, com filtros instantâneos e um design que remete à identidade visual do cliente League of Legends (Hextech UI).

## ✨ Funcionalidades

- **🔄 Sincronização Automática**: Detecta e usa a versão mais recente do Data Dragon (Riot Games API).
- **🔎 Busca Instantânea**: Filtre campeões pelo nome em tempo real enquanto digita.
- **🎨 UI Temática**: Interface estilizada com Tailwind CSS inspirada no universo de Runeterra.
- **⚡ Performance**: Carregamento otimizado e transições suaves.
- **📱 Responsivo**: Layout adaptável para desktop, tablets e mobile.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna focada em performance e experiência de desenvolvimento:

- **[React](https://react.dev/)**: Biblioteca para construção da interface.
- **[Vite](https://vitejs.dev/)**: Build tool ultrarrápida.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilitários para estilização ágil e consistente.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e gestos.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para consumo de APIs.
- **[React Router](https://reactrouter.com/)**: Gerenciamento de rotas da aplicação.

## 🚀 Como Executar

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

- Node.js (versão 18 ou superior recomendada)
- NPM ou Yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/lol-champions-explorer.git
   cd lol-champions-explorer
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

O projeto estará rodando em `http://localhost:5173`.

## 📂 Estrutura do Projeto

```
src/
├── components/      # Componentes reutilizáveis (Cards, Layout, etc)
├── pages/           # Páginas da aplicação (Home, Detalhes)
├── services/        # Integração com APIs externas (Data Dragon)
└── App.jsx          # Componente raiz e configuração de rotas
```

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou encontrar bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---