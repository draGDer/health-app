# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

req:
1. User Sign up and login
2. User login -> vaccine status if available.
3. if no vaccine taken, register the vaccine dose details(type, location, etc)


User:
    id, name , datetime

vaccine:
    id, name, type, datetime

user_vaccine:
    user.id, vaccine.id, location, date, dose-no,

sequelise

http headers
middlewares
exception handler

better error handling;
JSON responses,
Updating and deletion.
onion structure in express and koa.