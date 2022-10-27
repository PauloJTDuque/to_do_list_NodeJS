import { Todo } from "../Todo.js";
// import { deleteTodoByIdController } from "../usecases/DeleteTodoById/index.js";

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
        const index = this.todos.findIndex((todo) => todo.id === id); 

        this.todos.splice(index, 1);

        return;
    }

    upateById({id, description, deadline}) {
        const index = this.todos.findIndex((todo) => todo.id === id);

        Object.assign(this.todos[index], {
            description,
            deadline,
        });
        return this.todos[index];
    }

    markAsDone(id) {
        const todo = this.todos.find((todo) => todo.id === id)

       Object.assign(todo, {
            done: true
       })

       return todo;
    }

}