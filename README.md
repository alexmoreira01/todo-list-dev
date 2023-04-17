# Todo List
 
 ## Projeto foi desenvolvido com ReactJs, NodeJs, TypeScript e MySql, e fornece uma aplicação para salvar suas tarefas.
 
 > Status do Projeto: Concluido :heavy_check_mark:
 
  ### Alerta - Pela hospedagem, ao abrir o app pela primeira vez ou após de um algum tempo, acaba tendo um delay ate o carregamento das rotas da API

 <br>
 
 ## Principais linguagens e libs utilizadas

- [ReactJs](https://reactjs.org/)
- [ViteJs](https://vitejs.dev/)
- [StyledComponents](https://styled-components.com/)
- [Radix](https://www.radix-ui.com/)
- [Axios](https://axios-http.com/)
- [NodeJs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](http://expressjs.com/pt-br/)
- [PrismaOrm](https://www.prisma.io/)
- [TSyringe](https://github.com/Microsoft/tsyringe)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [SwaggerUi](https://swagger.io/tools/swagger-ui/)

 ## Front-End - ReactJS

  Foi utilizado ReactJs e TypeScript para a criar a interface e o vite.js para o build da aplicação, na estilização foi utilizado o styled components para a estilização do app, para criar o modal de atualização de uma tarefa e a caixa de select para os status foi utilizado o radix ui
 
 ## Back-End - NodeJs
  Foi utilizado Express para a criação da Api e uma estrutura baseada no Nest.

  <br>
  Foi implementado também uma estrutura baseada no Solid e utilizado o PrismaOrm para se conectar ao banco de dados e realizar operações com ele sendo hospedado na Heroku e o TSyringe para o auxilo nas instanciações entre os controller, useCases e repositorys. Foi criado um arquivo .env.example na pasta server para a url de conexão com o banco, sendo necessário dois bancos de dados para o prisma.
 
  <br>
  Para criar o build da Api foi utiliado o babel para gerar a compilação para javascript.  

  <br>

## Testes
  Foi utilizado Jest para a criação dos testes unitários

## Rotas da aplicação - Documentação
  > https://todo-list-api-q545.onrender.com/api-docs/ - Documentação com Swagger

ou
> http://localhost:3333/api-docs/ - Documentação com Swagger

## Deploy da Aplicação com Netlify e Render:

> https://todo-list-dev.netlify.app/ - Front-end

> https://todo-list-api-q545.onrender.com/ - Back-end

## Para se executar o projeto em desenvolvimento ou build
### No modo development e necessário a configuração do arquivo env, mencionado acima em: Back-End - NodeJs
<br >

- Instalar dependências - Executar na pasta web e server - yarn ou npm
```sh
yarn install ou npm install
```
- Iniciar prismaClient  - Executar na pasta server
```sh
npm install @prisma/client

npm prisma generate
```
- Na pasta web e server - Inicia a duas aplicações como desenvolvimento
```sh
npm run dev
```
- Na pasta web e server - Cria o build das duas aplicações
```sh
npm run build
```
- Na pasta server - Roda a aplicação com o build gerado
```sh
npm run start
```
- Na pasta web - Roda a aplicação com o build gerado
```sh
npm run deploy
```
- Na pasta server - Roda os testes unitários da aplicação
```sh
npm run test
```

 <br>

