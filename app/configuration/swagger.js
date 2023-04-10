import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerModelValidator from 'swagger-model-validator';

export const router = express.Router();

const options = {
  swaggerDefinition: {
    info: {
      title: 'Ethereum REST API',
      version: '1.0.0',
      description: 'Ethereum REST API',
      contact: {
        email: 'dario.val.cast@gmail.com',
      },
    },
    tags: [
      {
        name: 'admin-controller',
        description: 'Admin API',
      }
    ],
    schemes: ['http'],
    host: 'localhost:3000',
    basePath: '/api',
  },
  apis: [ './app/controllers/AdminController.js','./app/models/admin-model.js'],

};

const swaggerSpec = swaggerJSDoc(options);
swaggerModelValidator(swaggerSpec);

router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export function validateModel(name, model) {
  const responseValidation = swaggerSpec.validateModel(
    name,
    model,
    false,
    true
  );
  if (!responseValidation.valid) {
    console.error(responseValidation.errors);
    throw new Error(`Model doesn't match Swagger contract`);
  }
}
