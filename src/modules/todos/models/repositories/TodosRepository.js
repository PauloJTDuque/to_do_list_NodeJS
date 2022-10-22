import { Todo } from "../Todo.js";
import { deleteTodoByIdController } from "../usecases/DeleteTodoById/index.js";

export class TodosRepository{

    todos;

    static INSTANCE;

    constructor() {
        this.todos = [];
    }

    static getInstance() {
        if (!TodosRepository.INSTANCE) {
          TodosRepository.INSTANCE = new TodosRepository();
        }
    
        return TodosRepository.INSTANCE;
    }   
    create({ description, username, done, deadline}) {
        const todo = new Todo();

        Object.assign(todo, {
            description,
            username,
            done,
            deadline,
            created_at: new Date(),
        });
        this.todos.push(todo);
        return todo;
    }
    findAllByUsername(username){
        return this.todos.filter((todo) => todo.username === username);
    }

    findById(id) {
       return this.todos.find((todo) => todo.id === id);
    }

    deleteById(id){
        const index = this.todos.find((todo) => todo.id === id); 
        this.todos.excluir
    }

}