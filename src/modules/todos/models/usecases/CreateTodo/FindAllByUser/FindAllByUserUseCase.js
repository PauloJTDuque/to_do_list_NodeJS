import { UsersRepository } from "../../../users/repositories/UsersRepository.js";
import { TodosRepository } from "../../repositories/TodosRepository.js"

export class FindAllByUserUseCase{
    constructor() {
        this.usersRepository = UsersRepository.getInstance();
        this.todosRepository = TodosRepository.getInstance();
     }

    execute(username) {
        // Se não e
        const user = this.usersRepository.findByUsername(username);

        if(!user) {
            throw new Error("User not found");
        }
        const todos = this.todosRepository.findAllByUser();

        return todos;
    }
}