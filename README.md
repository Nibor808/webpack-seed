## Basic Webpack setup for Node JS with Sass & Handlebars
### Install Instructions

1) clone or download the repo to a local directory

2) ensure that node is installed on you system ("node --version") if not visit [node js](https://nodejs.org/en/)

3) type "npm install" from inside the directory

4) install mysql (if not already installed) and create database named 'test' inside the directory

5) create file config/.env and add
* PORT= the port you will use for the app(ie 3000)
* DB_HOST=(database host name(possibly 'localhost'))
* DB_USER= your user name for your mysql instance
* DB_PASS= you password for your mysql instance
* DB_NAME='test'

### Running
1) type "npm run dev" from inside the directory to build database table 'users' and run webpack

2) type "npm run db:seed-user" to insert a user 'Test Test' with a user name = 't_test' and password = 'password'

3) open your browser to localhost:3000

4) login with user Test

## Current Abilities
1) able to sign in and pass sign in info to next page through routes, a database query and handlebars variables


