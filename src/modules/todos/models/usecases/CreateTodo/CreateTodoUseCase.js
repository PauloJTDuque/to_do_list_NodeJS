import { TodosRepository } from '../../repositories/TodosRepository.js'

export class CreateTodoUseCase {
    constructor () {
        this. todosRepository = TodosRepository.getInstance()
    }

    excute ({ description, username, done, deadline}) {
        const todo = this.todosRepository.create({
            description, 
            username, 
            done, 
            deadline,
        });
        return todo;
    }
}