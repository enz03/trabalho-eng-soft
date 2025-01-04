# Trabalho de Engenharia de Software

Este é um projeto de exemplo para um sistema de gerenciamento de restaurantes, desenvolvido utilizando Next.js para o frontend e Rails para o backend.

## Integrantes
- Enzo Zanetti Celentano - 211026495

## Introdução
Este repositório contém o código-fonte e a documentação do nosso projeto de Engenharia de Software.

## Requisitos

- Node.js (versão 14 ou superior)
- pnpm (ou npm/yarn)
- Ruby (versão 2.7 ou superior)
- Rails (versão 7.2 ou superior)
- PostgreSQL (ou outro banco de dados configurado)

## Configuração do Ambiente


### Frontend (Next.js)
1. Instale as dependências do frontend:
```
pnpm install
```
2. Crie um arquivo .env local na raiz do projeto Next.js e adicione as seguintes variáveis de ambiente:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
DATABASE_URL=your_database_url
NEXTAUTH_URL=http://localhost:3001
```
3. Inicie seu servidor local (na porta 3001)
```
pnpm dev
```
