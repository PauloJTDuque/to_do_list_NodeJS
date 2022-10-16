import {
    User
} from "../models/User.js";

export class UsersRepository {
    users;

    constructor() {
       this.users = [];
    }

    create ({ name, username, email, password }) {
        const user = new User();

        Object.assign(user, {
            name,
            username,
            email,
            password,
            created_at: new Date(),
        });

        this.users.push(user);

        return user;
    }

    list() {
        return this.users;
    }
}