// import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs"; // Import YAML library
const swaggerDocument = YAML.load("./swagger.yaml"); // Load your swagger.yaml file

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Bethesda",
      version: "1.0.0",
      description: "Your API description",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

// const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default setupSwagger;
