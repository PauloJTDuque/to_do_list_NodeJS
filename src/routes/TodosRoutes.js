import Router from 'express';

import { createTodoController } from '../modules/todos/models/usecases/CreateTodo/index.js';
import { findAllByUserController } from '../modules/todos/models/usecases/FindAllByUser/index.js';
import { deleteTodoByIdController } from '../modules/todos/models/usecases/DeleteTodoById/index.js';
import { markTodoAsDoneController } from '../modules/todos/models/usecases/MarkTodoAsDone/index.js';
import { updateTodoByIdController } from '../modules/todos/models/usecases/UpdateTodoById/UpdateTodoByIdController.js';

const todosRoutes = Router();

todosRoutes.post("/", (request, response) =>{
    return createTodoController.handle(request, response);
});

todosRoutes.get("/:username", (request, response) =>{
    return findAllByUserController.handle(request, response);
});

todosRoutes.delete("/:id", (request, response) => {
    return deleteTodoByIdController.handle(request, response);
});

todosRoutes.put("/:id", (request, response) => {
    return updateTodoByIdController.handle(request, response);
})

todosRoutes.patch("/:id", (request, response) => {
    return markTodoAsDoneController.handle(request, response);
});

export default todosRoutes;