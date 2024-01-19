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

## Rotas

### Categorias

- **GET /categories**: Lista todas as categorias.
- **POST /categories**: Cria uma categoria.

### Produtos

- **GET /products**: Lista todos os contatos.
- **GET /categories/:categoryId/products**: Lista todos os produtos de uma categoria.
- **POST /products**: Cria um produto.

### Pedidos

- **GET /orders**: Lista todos os pedidos.
- **POST /orders**: Cria um pedido.
- **PATCH /orders/:orderId**: Atualiza o status de um pedido.
- **DELETE /orders/:orderId**: Cancela um pedido.

### Uploads

- **GET /uploads/:imagePath**: Busca a imagem de um produto.

## Exemplos

Aqui estão exemplos de uso de cada rota da API:

### Categorias

- **Listar todas as categorias**:

```http
GET /categories
```

- **Criar uma categoria**:
```http
POST /categories
Content-Type: application/json

{
  "name": "Promoções",
  "icon": "🏷️"
}
```

### Produtos

- **Listar todos os produtos**:

```http
GET /products
```

- **Listar todos os produtos de uma categoria**:

```http
GET /categories/65a83c4b642ab1a0a0776bc1/products
```

- **Criar um produto**:
```http
POST /products
Content-Type: multipart/form-data; boundary=boundary

--boundary
Content-Disposition: form-data; name="name"

X-frango com Fritas
--boundary
Content-Disposition: form-data; name="description"

Lanche X-frango com o melhor frango frito do país
--boundary
Content-Disposition: form-data; name="image"; filename="x-frango.png"
Content-Type: image/png

< ./x-frango.png
--boundary
Content-Disposition: form-data; name="price"

18.99
--boundary
Content-Disposition: form-data; name="category"

65a83c67642ab1a0a0776bc5
--boundary
Content-Disposition: form-data; name="ingredients"

[{ "name": "Frango frito", "icon": "🍗" }, { "name":  "Alface", "icon": "🥬" }, { "name": "Tomate", "icon": "🍅" }]
--boundary--
```

### Pedidos

- **Listar todos os pedidos**:

```http
GET /orders
```

- **Criar um pedido**:
```http
POST /orders
Content-Type: application/json

{
  "table": "123",
  "products": [
    { "product": "65a845d3642ab1a0a0776bd5", "quantity": 2 },
    { "product": "65a84aba642ab1a0a0776c0a", "quantity": 4 }
  ]
}
```

- **Atualizar o status de um pedido**:
```http
PATCH /orders/65a85117642ab1a0a0776c56
Content-Type: application/json

{
  "status": "IN_PRODUCTION"
}
```

- **Cancelar um pedido**:
```http
DELETE /orders/65a85117642ab1a0a0776c56
```

### Uploads

- **Buscar a imagem de um produto**:
```http
GET /uploads/1705529405013-x-frango.png
```
