<br />
<div align="center"> 
  <h3 align="center">Challenge</h3>

  <p align="center">    
    <br />
     
  </p>
</div>




<!-- ABOUT THE PROJECT -->
## About The Project


O sistema de rastreamento de status de websites é uma aplicação web que permite que os clientes cadastrem URLs para monitoramento. Uma vez que uma URL é cadastrada, o cliente recebe uma confirmação do sucesso do cadastro e pode visualizá-la em uma lista de URLs cadastradas. Nesta lista, um gráfico mostra a quantidade de acessos recebidos por cada URL.

O sistema possui um robô que monitora continuamente todas as URLs cadastradas, armazenando o código de status HTTP e o corpo da resposta. Com isso, os clientes podem saber quando suas URLs foram acessadas e qual foi o código de status retornado. Eles também podem visualizar o conteúdo do HTML que foi recebido em cada acesso.

Para a implementação do projeto, o backend foi desenvolvido utilizando o framework NestJS junto com o Prisma ORM, enquanto o frontend foi construído com Vite e React.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Vite.js](https://vitejs.dev/)
* [React.js](https://reactjs.org/)
* [Nest.js](https://nestjs.com/)
* [Prisma](https://www.prisma.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



### Prerequisites
This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/joaomenna1/challenge
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run
   ```sh
    npm run dev (FRONTEND)
    npm run star:DEV (BACKEND)
   ```


<p align="right">(<a href="#top">back to top</a>)</p>


### Config backend

_Below is an example of how you can instruct your audience on installing and setting up your BACKEND. This template doesn't rely on any external dependencies or services._

1. docker-compose up -d
2. Migrate prisma
   ```sh
   npx prisma migrate dev
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run
   ```sh
    npm run star:DEV (BACKEND)
   ```
5. Run
   ```sh
    teste rotas em client.http
     - GET  {{baseUrl}}/urls?page=2
     - POST {{baseUrl}}/create-url
     - POST {{baseUrl}}/sessions
     - POST {{baseUrl}}/accounts
     - @baseUrl = http://localhost:3333
    
   ```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Agradecimentos

^^

