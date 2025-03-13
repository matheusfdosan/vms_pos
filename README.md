<h1 align="center"> VM Softwares - Point of Sales (POS) </h1>

<p align="center">
O sistema de controle de fluxo para a empresa VM Softwares foi desenvolvido com o objetivo de otimizar a gestão de vendas e operações comerciais, integrando um frontend em React.js e um backend em Node.js com Fastify.
</p>

<p align="center">
  <a href="#🚀-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#💻-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#🚧-arquitetura-de-rotas">Arquitetura de Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#👨‍💻-contribuidores">Contribuidores</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#📞-contato">Contato</a>
</p>

<p align="center">
  <a href="">
    <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
  </a>
</p>

![preview](https://github.com/matheusfdosan/vms_pos/blob/main/backend/.github/preview.png)
<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

### Frontend
- React.js
- Vite
- Dotenv
- Axios
- jsPDF

### Backend
- Node.js
- Fastify
- PostgreSQL (via Neon Database)
- CRUD
- HTTP
- API RESTful

## 💻 Projeto

O **VM Softwares - POS** é um sistema de ponto de venda (POS) completo, projetado para simplificar e otimizar processos de vendas em ambientes comerciais. O projeto é composto por duas partes principais:

- **Frontend**: Desenvolvido em React.js com Vite como bundler, oferece uma interface intuitiva para gerenciar produtos, clientes e compras. Consome uma API RESTful para interação com o backend e inclui funcionalidades como adicionar/remover produtos, gerar PDFs (notas fiscais) com jsPDF e controle de estados com useState. As configurações, como a URL da API, são gerenciadas por variáveis de ambiente via .env.

- **Backend**: Construído com Node.js e Fastify, utiliza PostgreSQL como banco de dados para suportar uma API RESTful eficiente. Permite o cadastro, edição e remoção de produtos, controle automático de estoque conforme as vendas, acompanhamento de pedidos, registro de pagamentos e geração de relatórios financeiros sobre vendas e produtos mais vendidos.

O sistema proporciona uma solução moderna e funcional para administração de negócios, integrando frontend e backend em uma arquitetura robusta e colaborativa.

## 🚧 Arquitetura de rotas

Abaixo estão as rotas planejadas e seu progresso:

### 👤 Rotas Clientes
- [x] Mostrar todos os clientes *GET /client/all*
- [x] Mostrar um cliente *GET /client/:id*
- [x] Novo cliente *POST /client/add*
- [x] Alterar informação (nome, telefone/email) *PUT /client/:id*
- [x] Deletar Cliente *DELETE /client/:id*

### 📖 Rotas Catálogos
- [x] Mostrar todos os produtos *GET /product/all*
- [x] Mostrar um produto *GET /product/:id*
- [x] Adicionar produto *POST /product/add*
- [x] Alterar produto (nome, preço, estoque) *PUT /product/:id*
- [x] Deletar produto *DELETE /product/:id*

### 🛒 Rotas Compras
- [x] Mostrar todas as compras *GET /purchase/log*
- [x] Pagamentos (ao efetuar pagamento, adicionar no log de compras e mostrar nota fiscal) *POST /purchase/add*
- [x] Deletar log (caso queira devolver algum item com nota fiscal) *DELETE /purchase/:id*

## 👨‍💻 Contribuidores

<br>
<div style="display: flex; align-items: center; gap: 10px;">
  <img src="https://avatars.githubusercontent.com/u/166236768?v=4" style="width: 30px; border-radius: 20%"> <a href="https://github.com/PedroCabs" target="_blank"> Pedro Cabral (Front-end)</a> 
</div>
<br>
<div style="display: flex; align-items: center; gap: 10px;">
  <img src="https://avatars.githubusercontent.com/u/71533988?v=4" style="width: 30px; border-radius: 20%"> <a href="https://github.com/danrod278" target="_blank"> Daniel Rodrigues (Back-end)</a> 
</div>
<br>
<div style="display: flex; align-items: center; gap: 10px;">
  <img src="https://avatars.githubusercontent.com/u/104006185?v=4" style="width: 30px; border-radius: 20%"> <a href="https://github.com/matheusfdosan" target="_blank"> Matheus Faustino (Front-end, Back-end, Conexão)</a> 
</div>

## 📞 Contato

- Acesse também meus outros repositórios no [GitHub](https://github.com/matheusfdosan?tab=repositories).
- Siga-me no [Instagram](https://instagram.com/matheusfdosan).
- Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/matheusfaus/).
