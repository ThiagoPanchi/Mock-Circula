# PRD - Circula: Unindo Doações com Quem Precisa

## 1. Visão Geral

O Circula é um mock de WebGIS voltado para conectar pessoas e instituições que possuem itens, alimentos ou tempo para doar com pessoas e organizações que necessitam dessas doações.

A plataforma apresenta um mapa interativo da região da Grande Florianópolis, exibindo itens disponíveis para doação e organizações que recebem doações. O objetivo principal é demonstrar a ideia do produto por meio de uma experiência visual, simples e navegável, sem backend, autenticação real ou persistência de dados.

## 2. Objetivo do Produto

Criar uma plataforma WebGIS estática que permita visualizar, em um mapa, pontos de doação próximos ao usuário, incluindo:

- Itens disponíveis para doação.
- Pessoas ou instituições doadoras.
- Organizações que recebem doações.
- Informações de contato e detalhes sobre cada item ou organização.
- Filtros por categoria de doação.

O mock deve comunicar claramente como a solução funcionaria em um produto real, priorizando visualização, navegação e entendimento da proposta.

## 3. Público-Alvo

- Pessoas que possuem itens, alimentos ou tempo para doar.
- Pessoas que necessitam de doações.
- Instituições sociais que recebem doações.
- Pessoas interessadas em encontrar organizações para doar diretamente.

## 4. Problema

Muitas pessoas possuem itens em bom estado, alimentos ou disponibilidade de tempo para doar, mas não sabem quem precisa ou onde doar. Ao mesmo tempo, pessoas e organizações que precisam de ajuda nem sempre têm visibilidade sobre recursos disponíveis na sua região.

O Circula propõe reduzir essa distância usando localização geográfica como principal meio de descoberta.

## 5. Proposta de Solução

Disponibilizar um mapa interativo onde o usuário possa visualizar:

- Itens disponíveis para retirada.
- Categoria de cada doação.
- Local aproximado de retirada.
- Dados do doador.
- Organizações que recebem doações.
- Tipos de doações aceitas por cada organização.

Neste mock, todas as informações serão fictícias e carregadas localmente no frontend.

## 6. Escopo do Mock

### 6.1 Incluído no Escopo

- Tela inicial de login simulada.
- Botão de acesso como visitante.
- Opção visual de cadastro/registro, sem persistência real.
- Mapa interativo com Leaflet.
- Dados fictícios da Grande Florianópolis.
- Marcadores de itens disponíveis para doação.
- Marcadores de organizações que recebem doações.
- Popup/modal centralizado com detalhes do item ao clicar no marcador.
- Popup/modal centralizado com detalhes da organização ao clicar no marcador.
- Filtro por tipo de item.
- Botão visual de perfil.
- Botão visual para cadastro de novo item.
- Layout responsivo para desktop e mobile.

### 6.2 Fora do Escopo

- Backend.
- Banco de dados real.
- SQLite ou qualquer persistência local obrigatória.
- Cadastro funcional de usuários.
- Login real com autenticação.
- Validação real de CPF, telefone ou email.
- Cadastro funcional de novos itens no mapa.
- Upload real de fotos.
- Geolocalização obrigatória em tempo real.
- Sistema de chat ou intermediação entre doador e beneficiário.
- Controle de disponibilidade real do item.
- Painel administrativo.

## 7. Funcionalidades

### 7.1 Tela de Login Simulada

A primeira tela deve apresentar a identidade do projeto e opções de entrada.

Requisitos:

- Exibir nome do projeto: Circula.
- Exibir chamada principal relacionada à união entre doações e quem precisa.
- Permitir entrada pelo botão `Entrar como visitante`.
- Exibir opção de `Registrar`, apenas como simulação visual.
- Exibir campos simulados de login, se fizer sentido para a interface.

Critério esperado:

- O usuário deve conseguir acessar o mapa clicando em `Entrar como visitante`.

### 7.2 Cadastro Simulado de Usuário

Embora o produto real exija dados por segurança, no mock o cadastro não será funcional.

Campos previstos conceitualmente:

- Nome.
- CPF.
- Endereço.
- Telefone.
- Email.
- Foto.

Comportamento no mock:

- Pode existir uma tela ou modal visual de cadastro.
- Os dados não precisam ser salvos.
- O fluxo pode informar que o cadastro é apenas demonstrativo.

### 7.3 Mapa WebGIS

O mapa será o centro da experiência após o acesso como visitante.

Requisitos:

- Exibir mapa da região da Grande Florianópolis.
- Usar Leaflet como biblioteca de mapa.
- Centralizar o mapa em uma posição representativa da Grande Florianópolis.
- Exibir marcadores de itens disponíveis para doação.
- Exibir marcadores de organizações que recebem doações.
- Diferenciar visualmente itens e organizações.
- Permitir clique nos marcadores.

### 7.4 Visualização de Itens para Doação

Cada item disponível para doação deve ser representado por um marcador no mapa.

Dados do item:

- Nome do item.
- Categoria.
- Descrição.
- Estado/qualidade do item.
- Motivo da doação, quando disponível.
- Foto fictícia ou imagem placeholder.
- Local de retirada.
- Nome do doador.
- Telefone ou email de contato fictício.

Categorias previstas:

- Móveis.
- Vestimentos.
- Eletrônicos.
- Alimentos.
- Mão de Obra.
- Outros.

Comportamento:

- Ao clicar em um item no mapa, abrir um popup/modal centralizado na tela.
- O popup/modal deve mostrar as informações do item e o contato do doador.

### 7.5 Visualização de Organizações

Organizações devem ser exibidas no mapa para usuários que desejam doar diretamente a instituições.

Dados da organização:

- Nome.
- Descrição de quem são.
- Público atendido.
- Site ou rede social.
- Tipos de doações recebidas.
- Endereço ou localização aproximada.
- Contato fictício, se necessário.

Comportamento:

- Ao clicar em uma organização no mapa, abrir um popup/modal centralizado.
- O popup/modal deve apresentar nome, descrição, público atendido, página e tipos de doações aceitas.

### 7.6 Filtro por Categoria

O usuário deve conseguir filtrar os itens exibidos no mapa por categoria.

Categorias do filtro:

- Todos.
- Alimentos.
- Móveis.
- Eletrônicos.
- Vestimentos.
- Mão de Obra.
- Outros.

Comportamento:

- Ao selecionar uma categoria, o mapa deve exibir apenas os itens daquela categoria.
- Organizações podem continuar visíveis ou ter um controle separado, conforme decisão de interface.
- A opção `Todos` deve restaurar a visualização completa dos itens.

### 7.7 Perfil do Usuário

O sistema deve apresentar um botão de perfil para demonstrar onde o usuário acessaria suas informações.

Comportamento no mock:

- O botão pode abrir uma tela ou modal com dados fictícios do usuário visitante.
- A edição pode ser apenas visual, sem persistência.

### 7.8 Cadastro de Novo Item

O sistema deve apresentar um botão para cadastro de novo item.

Campos previstos conceitualmente:

- Categoria.
- Nome do item.
- Descrição.
- Estado/qualidade.
- Motivo da doação.
- Foto.
- Ponto de retirada no mapa.

Comportamento no mock:

- O botão pode abrir um formulário demonstrativo.
- O item não precisa ser salvo nem adicionado ao mapa.
- A interface deve deixar claro que se trata de uma simulação.

## 8. Dados Fictícios

O mock deve conter uma base local de dados fictícios para a região da Grande Florianópolis.

Exemplos de itens:

- Sofá em bom estado, categoria Móveis, localizado em Florianópolis.
- Cesta básica, categoria Alimentos, localizada em São José.
- Celular usado, categoria Eletrônicos, localizado em Palhoça.
- Roupas infantis, categoria Vestimentos, localizadas em Biguaçu.
- Serviço voluntário de manutenção simples, categoria Mão de Obra, localizado em Florianópolis.

Exemplos de organizações:

- Organização de apoio a famílias em vulnerabilidade social.
- Instituição que recebe roupas e alimentos.
- Associação comunitária que recebe móveis e eletrodomésticos.

## 9. Requisitos Não Funcionais

- A aplicação deve ser estática e executada no frontend.
- Deve ser desenvolvida com JavaScript e Vue.js.
- Deve utilizar Leaflet para renderização do mapa.
- Deve carregar os dados localmente, sem chamadas obrigatórias para backend.
- Deve ser responsiva para desktop e mobile.
- Deve ter navegação simples e direta.
- Deve usar dados fictícios, sem informações pessoais reais.
- Deve ter performance adequada para uma base pequena de dados mockados.

## 10. Critérios de Sucesso

O mock será considerado bem-sucedido se o usuário conseguir:

- Acessar o sistema clicando em `Entrar como visitante`.
- Visualizar o mapa da região da Grande Florianópolis.
- Ver itens disponíveis para doação no mapa.
- Ver organizações que recebem doações no mapa.
- Clicar em um item e visualizar um popup/modal centralizado com informações do item e contato do doador.
- Clicar em uma organização e visualizar um popup/modal centralizado com nome, descrição, público atendido, página e tipos de doações aceitas.
- Filtrar os itens por categoria.
- Entender que cadastro, perfil e novo item são fluxos simulados neste mock.

## 11. Restrições e Premissas

- O projeto é uma simulação para validação da ideia.
- Não haverá backend neste momento.
- Não haverá banco de dados neste momento.
- Os dados serão armazenados em estruturas locais no frontend, como arrays ou arquivos JSON.
- O cadastro real de usuários não será implementado.
- O cadastro real de itens não será implementado.
- Fotos podem ser placeholders ou imagens públicas adequadas para demonstração.
- As localizações devem ser fictícias ou aproximadas, sem expor dados reais de pessoas.

## 12. Métricas de Validação do Mock

- Usuário entende a proposta do projeto em poucos segundos.
- Usuário consegue acessar o mapa sem ajuda.
- Usuário identifica visualmente a diferença entre item e organização.
- Usuário consegue abrir detalhes dos marcadores.
- Usuário consegue aplicar e remover filtros de categoria.
- Usuário compreende quais funcionalidades são apenas demonstrativas.

## 13. Riscos

- Confusão entre funcionalidades reais e simuladas.
- Excesso de campos de cadastro gerar expectativa de persistência real.
- Dados fictícios parecerem dados reais se não forem claramente identificados.
- Interface do mapa ficar poluída se houver muitos marcadores.
- Uso de fotos externas causar inconsistência visual ou problemas de carregamento.

## 14. Recomendações de Implementação

- Separar dados mockados em um arquivo próprio, como `mockData.js` ou `data/donations.js`.
- Usar componentes Vue para login, mapa, filtro, modal de item, modal de organização, perfil e formulário simulado.
- Usar ícones ou cores diferentes para categorias e organizações.
- Exibir aviso discreto indicando que os dados são fictícios.
- Manter o fluxo principal simples: login como visitante, mapa, filtros e detalhes.

## 15. Fluxo Principal do Usuário

1. Usuário acessa a aplicação.
2. Usuário visualiza a tela inicial/login.
3. Usuário clica em `Entrar como visitante`.
4. Sistema exibe o mapa da Grande Florianópolis.
5. Usuário visualiza itens e organizações no mapa.
6. Usuário usa o filtro para selecionar uma categoria de doação.
7. Usuário clica em um marcador de item ou organização.
8. Sistema exibe um popup/modal centralizado com os detalhes.
9. Usuário fecha o popup/modal e continua navegando no mapa.
