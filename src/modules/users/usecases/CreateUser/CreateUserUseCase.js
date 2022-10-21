import { UsersRepository } from "../../repositories/UsersRepository.js";

export class CreateUserUseCase {
  constructor() {
    this.usersRepository = UsersRepository.getInstance();
  }

  execute({ name, username, email, password }) {
    // Não posso ter o mesmo username que outro usuário
    // Não posso ter o mesmo e-mail que outro usuário

    const usernameAlreadyTaken = this.usersRepository.findByUsername(username);

    const emailAlreadyTaken = this.usersRepository.findByEmail(email);

    if (usernameAlreadyTaken || emailAlreadyTaken) {
      throw new Error( "User already exists");
    }

    const user = this.usersRepository.create({
      name,
      username,
      email,
      password,
    });

    return user;
  }
}