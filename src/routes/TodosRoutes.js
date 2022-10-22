import Router from 'express';
import { createTodoController } from '../modules/todos/models/usecases/CreateTodo/index.js';
import { findAllByUserController } from '../modules/todos/models/usecases/CreateTodo/FindAllByUser/index.js';

const todosRoutes = Router();

todosRoutes.post("/todos", (request, response) =>{
    return createTodoController.handle(request, response);
});

todosRoutes.get("/todos/:username", (request, response) =>{
    return findAllByUserController.handle(request, response);
})
export default todosRoutes;