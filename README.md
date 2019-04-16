# NodeJS Skeleton (slim)
This is a simple RESTful api, use dotenv for environment.

### Recommend.
 - Small RESTapi projects.
 - Mock API.

## How to use.
 1. Create `.env` file and add _PORT=3000_ or use `echo "PORT=3000" > .env`
 2. Run `npm i`
 3. Start app with `npm start`

## Route.
  - Simples get all users from json array with **GET** `/v3/users`.
  - Get some id with **GET** `/v3/users/:id`

## TODO.
  - **ADD** method **POST** for add users.
  - **ADD** method **DELETE** for delete users.
  - **ADD** method **PATCH** for update users.

## CHANGELOG
  - v1.0.0 init project.