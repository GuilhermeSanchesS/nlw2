# Next Level Week 2 - RocketSeat

<p align="center">
  <img alt="License" src="./docs/NLW.gif">
</p>

## :computer: Projeto

Projeto Web e Mobile desenvolvido durante o programa Next Level Week da Rocketseat. Trata-se de uma plataforma que busca conectar alunos e professores. Por meio dela, professores podem fazer cadastro das matérias que lecionam, horários disponíveis, valor das aulas e seu contato. Os alunos podem pesquisar a lista de professores disponíveis, entrar em contato com eles e favoritá-los.

## :wrench: Tecnologias Utilizadas:

- ReactJS
- Typescript
- Axios
- React-Native
- Node.js
- Typescript
- Express
- Knex.js
- SQLite

## :heavy_check_mark: Pré-requisitos:

- **[Git](https://git-scm.com/)** instalado e configurado
- Ter o **[Node.js](https://nodejs.org/en/)** instalado
- Gerenciador de pacotes **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
- **[Expo](https://expo.io/)** instalado de forma global na máquina

## :heavy_check_mark: Para Instalar e Rodar:

```sh
  # API
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn
  # Configurando o banco de dados
  $ yarn knex:migrate
  # Inicie a API
  $ yarn start
  # Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn
  # Inicie a aplicação web
  $ yarn start
  # Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn
  # Inicie a aplicação mobile
  $ yarn start
```

Rode a aplicação no endereço: http://localhost:3000/

## :star: Para contribuir:

1. Faça o _fork_ do projeto (<https://github.com/matheusfelipeog/proffy>)

2. Clone o seu _fork_ (`git clone https://github.com/user_name/proffy.git`)

3. Crie uma _branch_ para realizar a modificação (`git checkout -b feature/name_new_feature`)

4. Adicione as modificações e faça o _commit_ (`git commit -m "Descreva sua modificação"`)

5. _Push_ (`git push origin feature/name_new_feature`)

6. Crie um novo _Pull Request_
