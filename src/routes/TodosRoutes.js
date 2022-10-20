import Router from 'express';
import { createTodoController } from '../modules/todos/models/usecases/CreateTodo/index.js';

const todosRoutes = Router();

todosRoutes.post("/todos", (request, response) =>{
    return createTodoController.handle(request, response);
});

export default todosRoutes;