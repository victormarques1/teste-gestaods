# ✨ Teste - Gestão DS

## Estrutura do projeto
O projeto do teste foi dividido em duas partes e foi escrito utilizando a linguagem de programação TypeScript. O Front-end foi desenvolvido com React / Next.js e contou com o uso das bibliotecas styled-components / styled-system para a estilização e construção dos componentes. Também foi implementado um Back-end simples que conta com uma API para salvar os dados no MongoDB, para isso foi utilizado o Node.js com Express.

## 📋 Pré-requisitos

Para rodar a aplicação é necessário ter instalado na sua máquina:

- node v20.10.0 ou mais recente, link em:
```
https://nodejs.org/en
```

## 🚀 Rodando a aplicação

Para iniciar o projeto, clone o repositório:

```
git clone https://github.com/victormarques1/devlink
```
Crie um arquivo .env dentro da pasta backend:
```
MONGODB_URI=sua_uri_do_mongodb
```

Configure seu cluster MongoDB:
```
Crie uma conta ou faça login em https://www.mongodb.com/
Crie um novo cluster (selecione a opção gratuita: M0)
Obtenha a URI de conexão do seu cluster.
```

Adicione a URI do seu cluster MongoDB no seu arquivo .env:

```
Coloque a URI do seu cluster MongoDB no arquivo .env criado.
ex: MONGODB_URI=sua_uri_do_mongodb
```

Abra um terminal para rodar o backend: 

```
cd teste-gestaods 
cd backend

Instale as dependências:
npm install

Para rodar o backend execute o comando: 
npm start
```

Abra um terminal para rodar a o frontend:

```
cd teste-gestaods 
cd frontend

Instale as dependências:
npm install

Para rodar o backend execute o comando: 
npm run dev
```

Pronto! A aplicação está rodando em http://localhost:3000/
