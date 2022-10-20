import { Todo } from "../Todo.js";

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
}