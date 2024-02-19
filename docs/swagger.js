/* Swagger configuration */
const options = {
    openapi: 'OpenAPI 3',
    language: 'en-US',
    disableLogs: false,
    autoHeaders: false,
    autoQuery: false,
    autoBody: false
}

import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '2.0.0',
    title: 'Culture Power API',
    description: 'This Swagger documentation is meant to be used by the API consumer',
    contact: {
        'name': 'Isabelle Moura',
        'email': 'mourabisabelle@gmail.com'
    },
  },
  host: 'localhost:3333',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [],
  securityDefinitions: {},
  definitions: {
    "User": {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
        },
        "required": ["username", "password", "email"],
        "examples": {
            "example-1": {
              "value": {
                "username": "exampleUsername",
                "password": "examplePassword",
                "email": "example@email.com"
              }
            }
          }
      }
  },
};

const outputFile = './docs/swagger.json';
const endpointsFiles = ["./dist/server.cjs"];

swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//     require('./dist/app.js'); // Your project's root file
// });