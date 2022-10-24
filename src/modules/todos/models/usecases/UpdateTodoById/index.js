import { TodosRepository } from "../../repositories/TodosRepository.js";
import { UpdateTodoByIdController } from "./UpdateTodoByIdController.js";
import { UpdateTodoByIdUseCase } from "./UpdateTodoByIdUseCase.js";



const todosRepository = TodosRepository.getInstance();

const updateTodoByIdUseCase = new UpdateTodoByIdUseCase(todosRepository);

const updateTodoByIdController = new UpdateTodoByIdController(updateTodoByIdUseCase);

export { updateTodoByIdController };