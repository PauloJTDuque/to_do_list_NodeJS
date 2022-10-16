import { UsersRepository } from "../../repositories/UsersRepository.js";
import { CreateUserUseCase } from "./CreateUserUseCase.js";
import { CreateUserController } from "./CreateUserController.js";

const usersRepository = UsersRepository.getInstance();

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };