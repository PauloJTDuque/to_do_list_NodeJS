import { UpdateTodoByIdUseCase } from "./UpdateTodoByIdUseCase.js";


export class UpdateTodoByIdController {
    constructor() {
        this.updateTodoByUseCase = new UpdateTodoByIdUseCase();
    }

    handle(request, response){
        // ID: Propriedade de identificação
        // Propriedades a serem atualizadas: Description, Deadline
        const { id } = request.params;
        const { description, deadline } = request.body;

        const updatedTodo = this.updateTodoByIdUseCase.execute({
            id,
            description,
            deadline,
        });
        return response.json(updatedTodo);
    }
}