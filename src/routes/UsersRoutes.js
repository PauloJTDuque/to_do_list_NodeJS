import Router from "express";

import { UsersRepository } from "../modules/users/repositories/UsersRepository.js";

const usersRouters = Router();

// Rota de criação de usuários
usersRouters.post("/users", (request, response) => {
    const { name, username, email, password } = request.body;

    const usersRepository = new UsersRepository();

    const user = usersRepository.create({ name, username, email, password })

   
    return response.json(user);
})

// Rota de listagem de usuários
usersRouters.get("/users", (request, response) => {
    const usersRepository = new UsersRepository();
    const users = usersRepository.list();
    return response.json(users);

});



export default usersRouters;