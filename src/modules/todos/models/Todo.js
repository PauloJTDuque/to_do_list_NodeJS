import {  v4 as uuidV4 } from "uuid";

export class Todo {
    id;
    description;
    username; //Foreign Key -> Chave Estrangeira
    // user_id se estivéssemos trabalhando com um banco de dados relacional.
    done;
    deadline;
    created_at;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}