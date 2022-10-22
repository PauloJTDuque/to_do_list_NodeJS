import { DeleteTodoByIdUseCase } from "./DeleteTodoByIdUseCase.js";

export class DeleteToDoByIdController{
    constructor() {
        this.deleteTodoByIdUseCase = new DeleteTodoByIdUseCase();
    }
}