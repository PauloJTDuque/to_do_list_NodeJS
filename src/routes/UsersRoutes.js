import Router from "express";

const usersRouters = Router();

import { createUserController } from "../modules/users/usecases/CreateUser/index.js";
import { listUsersController } from "../modules/users/usecases/ListUsers/index.js";

// Rota de criação de usuários
usersRouters.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

// Rota de listagem de usuários
usersRouters.get("/users", (request, response) => {
  return listUsersController.handle(request, response);
});

export default usersRouters;