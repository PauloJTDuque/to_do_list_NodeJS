import { AppException } from "../../../../../application/errors/AppException.js";
import { TodosRepository } from "../../repositories/TodosRepository.js";


export class UpdateTodoByIdUseCase{
    constructor() {
        this.todosRepository = TodosRepository.getInstance();

    }
    execute({id, description, deadline}) {
        // O todo deve existir com o ID informado
        // As propriedades 'done' e 'username' não podem ser atualizadas

        const todo = this.todosRepository.findById(id);

        if (!todo){
            throw new AppException(404, "Todo not foun");
        }

        const [day, month, year] = deadline.split("/");

        const updatedTodo = this.todosRepository.updateById({
            id,
            description,
            deadline: new Date(year, month-1, day)
        });

        return updatedTodo;
    }
}