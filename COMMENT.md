# Decisão de arquitetura

Pensei em criar duas aplicações separada e já em container, pensando em escalabilidade e manutenção. Segui a arquitetura com algumas características do SOLID para melhor entendimento e manutenção.

# Biblioteca de terceiros

O frontend desenvolvido em Vue.js e foi usado um template admin terceiro, basseado no Vuetify, para criação das telas Nuxt.js https://github.com/eddami/nuxt-material-admin/tree/master/template

# Melhoras

O que não consegui fazer por questões de tempo, por ter tido imprevistos no meu atual serviço, e que é de suma importancia é a autenticação. Mas basicamente iria criar a autenticação baseada no JWT, onde iria colocar todas as configurações no auth.ts, criaria o middleware e controller de autenticação para que no login fosse verificado e retonado para o front o token, que seria gravado em banco. Com isso todas as rotas de acesso do sistema seriam chamadas com esse token no cabeçalho.


# Utilização

Cada projeto está com seu README com as instruções para uso.

# Finalização

Gostaria de agradecer pela oportunidade de poder participar de um processo de uma empresa da importância da Mais Educação. Tenho certeza que poderei contribuir muito, junto de vocês, para o desenvolvimento e crescimento da empresa.

   
