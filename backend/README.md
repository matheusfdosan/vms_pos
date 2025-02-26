# VM Softwares - POS - Backend

## Rotas Clientes
[] Mostrar todos os clientes *GET /client/all*
[] Mostrar um cliente *GET /client/:id*
[x] Novo cliente *POST /client/add*
[] Alterar informação (nome, telefone/email) *PUT /client/:id*
[] Deletar Cliente *DELETE /client/:id*

## Rotas Catalogos
[] Mostrar todos os produtos *GET /product/all*
[] Mostrar um produto *GET /product/:id*
[] Adicionar produto *POST /product/add*
[] Alterar produto (nome, preço, estoque) *PUT /product/:id*
[] Deletar produto *DELETE /product/:id*

## Rotas Compras
[] Mostrar todas as compras *GET /purchase/log*
[] Pagamentos (ao efetuar pagamento, adicionar no log de compras e mostrar nota fiscal) *POST /purchase/add*
[] Deletar log (caso queira devolver algum item com nota fiscal) *PUT /purchase/:id*