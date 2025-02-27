# VM Softwares - POS - Backend

## Rotas Clientes
[] Mostrar todos os clientes *GET /client/all*<br>
[x] Mostrar um cliente *GET /client/:id*<br>
[x] Novo cliente *POST /client/add*<br>
[] Alterar informação (nome, telefone/email) *PUT /client/:id*<br>
[] Deletar Cliente *DELETE /client/:id*

## Rotas Catalogos
[] Mostrar todos os produtos *GET /product/all*<br>
[] Mostrar um produto *GET /product/:id*<br>
[] Adicionar produto *POST /product/add*<br>
[] Alterar produto (nome, preço, estoque) *PUT /product/:id*<br>
[] Deletar produto *DELETE /product/:id*

## Rotas Compras
[] Mostrar todas as compras *GET /purchase/log*<br>
[] Pagamentos (ao efetuar pagamento, adicionar no log de compras e mostrar nota fiscal) *POST /purchase/add*<br>
[] Deletar log (caso queira devolver algum item com nota fiscal) *PUT /purchase/:id*
