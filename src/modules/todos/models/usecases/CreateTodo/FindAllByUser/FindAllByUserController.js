import { FindAllByUserCase } from "./FindAllByUserUseCase.js"

export class FindAllByUserController {
    constructor() {
        this.findAllByUsersUseCase = new FindAllByUserUseCase();
    }

    handle(request, response) {
       const { username } = request.body;

       const todos = this.findAllByUsersUseCase.execute(username);

      return response.json(todos)  ;
    }


}