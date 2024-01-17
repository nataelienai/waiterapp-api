# WaiterApp API

WaiterApp API é a API que permite o funcionamento dos apps [Web](https://github.com/nataelienai/waiterapp-web) e [Mobile](https://github.com/nataelienai/waiterapp-mobile) do WaiterApp.

## Tecnologias

- Linguagem: TypeScript (Node.js)
- Gerenciador de pacotes: pnpm
- Bibliotecas: Express, mongoose, multer e Socket.IO
- Banco de dados: MongoDB
- Ferramentas: ESLint, Prettier, EditorConfig, commitlint, husky, lint-staged, Git e Docker

## Dependências

Para executar a API em seu computador, você precisará de [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/) e [Docker](https://docs.docker.com/engine/install/) instalados.

## Como executar

1. Usando um terminal, clone o repositório:
```sh
git clone https://github.com/nataelienai/waiterapp-api.git
```

2. Entre na pasta do repositório clonado:
```sh
cd waiterapp-api
```

3. Inicialize o banco de dados:

- Na primeira vez, execute o comando:
```sh
docker run --name waiterapp-db -p 27017:27017 -d mongo
```

- Nas outras vezes, basta executar o comando:
```sh
docker start waiterapp-db
```

4. Instale o pnpm (caso não o tenha):
```sh
npm install -g pnpm
```

5. Instale as dependências do projeto:
```sh
pnpm install
```

6. Inicialize a aplicação:
```sh
pnpm dev
```
