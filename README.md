## Basic Webpack setup for Node JS with Sass & Handlebars
### Install Instructions

1) clone or download the repo to a local directory

2) ensure that node is installed on you system ("node --version") if not visit [node js](https://nodejs.org/en/)

3) type "npm install" from inside the directory

4) install mysql (if not already installed) and create database named 'test' inside the directory

5) create file config/.env and add
* PORT= the port you will use for the app(ie 3000)
* DB_HOST=(database host name(possibly 'localhost'))
* DB_USER= your user name for your local mysql instance
* DB_PASS= your password for your local mysql instance
* DB_NAME='test'

### Running
1) type "npm run dev" from inside the directory to build database table 'users' and run webpack

2) hit control+c to exit the app

3) type "npm run db:seed-user" to insert a user 'Test Test' into the users table in database 'test'

4) type "npm run dev" to re-initiate the app

5) open your browser to localhost:(the value of the port variable defined in config/.env)

6) login with user Test Test, user name = 't_test' and password = 'password'

## Current Abilities
1) able to sign in and pass sign in info to next page through routes, a database query and handlebars variables


