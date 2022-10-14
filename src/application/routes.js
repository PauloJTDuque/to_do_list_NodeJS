import Router from "express";

const routes = Router();

routes.get("/", (request, response) => {
    response.status(201).json({
      message: "Hello World" ,
    });
});

export default routes;