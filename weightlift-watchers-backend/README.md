# Weightlift Watchers - Backend

## Generator
This server-side backend project was generated using [this generator](https://github.com/ChechaValerii/node-typescript-mongodb).
Refer to their documentation if there is a question about directory structure or other project generation subjects.

## Getting started

### Prerequisites
- node >= 14
- npm >= 6
- mongodb >= 4.0
- typescript >= 4.0

### Running the backend
1. Clone the repository
2. Copy `.env.example` to `.env` and replace `<your_secret_here>` with a secret - preferably one generated from a secure secrete generator
3. Run mongodb:
   - Windows: `mongod` 
   - MacOS: `mongod --config /opt/homebrew/etc/mongod.conf`
4. Install dependencies `npm install`
5. Run the backend: 
   - For development: `nodemon`
   - For production: `npm start`

## Endpoints
This backend is a RESTful API featuring the following endpoints:

* /api/v1/user - POST to this top-level endpoint to register a new user
    * /{user-id} - GET to retrieve a registered user by ID, PUT to update the user
        * /exercises - GET to retrieve a list of exercises that the user has stored, PUT to update the list
    * /{username} - GET to retrieve a registered user by username
        * /login - POST to log in an already-existing user
* /api/v1/exercise - POST to create a new exercise
    * /{exercise-id} - GET to Retrieve information about a specified exercise, PUT to update it, DELETE to delete

TODO: build some more detailed API documentation
