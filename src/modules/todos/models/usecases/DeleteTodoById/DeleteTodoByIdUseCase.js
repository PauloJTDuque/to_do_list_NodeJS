import { TodosRepository } from "../../repositories/TodosRepository.js";

export class DeleteTodoByIdUseCase{
    constructor() {
        this.todosRepository = TodosRepository.getInstance();
    }

    execute(id) {
        // Se não encontrar nenhum todo, retornar erro
        const todo = this.todosRepository.findById(id);
    
        if(!todo) {
            throw new Error("Todo not found");
        }
        return this.todosRepository.deleteById(id);

    }
}