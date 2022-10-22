import { FindAllByUserCase } from "./FindAllByUserUseCase.js"

export class FindAllByUserController {
    constructor() {
        this.findAllByUsersUseCase = new FindAllByUserUseCase();
    }

    handle(request, response) {
       const { username } = request.params;

       const todos = this.findAllByUsersUseCase.execute(username);

      return response.json(todos)  ;
    }


}