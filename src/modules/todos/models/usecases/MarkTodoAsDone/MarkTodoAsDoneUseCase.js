import { AppException } from "../../../../application/errors/AppException.js";

import { TodosRepository } from "../../repositories/TodosRepository.j";


export class MarkTodoAsDoneUseCase{
    constructor () {
        this.todosRepository = TodosRepository.getInstance();
    }

    execute(id) {
        // O todo deve existir com oID informado.
        const todo =this.todosRepository.findById(id);

        if(!todo){
            throw new AppException(404, "Todo not found");
        }

       const updatedTodo = this.todosRepository.markAsDone(id);

        return updatedTodo;

    }
}