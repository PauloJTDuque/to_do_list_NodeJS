import { DeleteTodoByIdUseCase } from "./DeleteTodoByIdUseCase.js";

export class DeleteToDoByIdController{
    constructor() {
        this.deleteTodoByIdUseCase = new DeleteTodoByIdUseCase();
    }

    handle(request, response) {
        const { id } = request.params;

        this. deleteTodoByIdUseCase.execute(id);

        return response.status(204).send();
    }
}