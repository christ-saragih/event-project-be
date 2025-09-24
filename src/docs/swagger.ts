import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Event Project API",
    description: "API documentation for the Event Project backend",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Development server",
    },
    {
      url: "https://event-project-be.vercel.app/api",
      description: "Production server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "csbennefit",
        password: "password",
      },
      RegisterRequest: {
        fullName: "Benefit",
        username: "csbennefit",
        email: "csbennefit@gmail.com",
        password: "password",
        confirmPassword: "password",
      },
      ActivationRequest: {
        code: "abcdef",
      },
      CreateCategoryRequest: {
        name: "Category Name",
        description: "Category Description",
        icon: "https://example.com/icon.png",
      },
      CreateEventRequest: {
        name: "Event Name",
        banner: "https://example.com/event-banner.jpg",
        category: "Category ObjectId",
        description: "Event Description",
        startDate: "yyyy-MM-DD HH:mm:ss",
        endDate: "yyyy-MM-DD HH:mm:ss",
        location: {
          region: "Region ObjectId",
          coordinates: [0.0, 0.0],
        },
        isOnline: false,
        isFeatured: true,
      },
      RemoveMediaRequest: {
        fileUrl: "https://example.com/file-to-remove.jpg",
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
