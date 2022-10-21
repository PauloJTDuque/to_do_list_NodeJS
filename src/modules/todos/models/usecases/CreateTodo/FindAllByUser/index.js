import { UsersRepository } from "../../../users/repositories/UsersRepository.js"
import { TodosRepository } from "../../../repositories/TodosRepository.js";
import { FindAllByUserUseCase } from "./FindAllByUserUseCase.js";
import { FindAllByUserController } from "./FindAllByUserController.js";


const usersRepository = UsersRepository.getInstance();
const todosRepository = TodosRepository.getInstance();

const findAllByUserUseCase = new FindAllByUserUseCase(
    usersRepository,
    todosRepository
);
const findAllByUserController = new FindAllByUserController(
    findAllByUserUseCase
);

export { findAllByUserController };