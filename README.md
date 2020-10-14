# my server boilerplate

a nodejs server boilerplate

## setup

install docker

## running the application

    ```npm run start:compose```

## environment variables

configure .env

- PGDATABASE -> database name
- PGUSER -> database username
- PGPASSWORD -> database password
- CONNECTION_URL -> database connection string

## test the api

curl http://0.0.0.0:3000/user

curl -H "Content-Type: application/json" --request POST --data "@src/tests/postUser.json" http://0.0.0.0:3000/user
