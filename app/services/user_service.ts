import User from "#models/user";
import hash from "@adonisjs/core/services/hash";

export class UserService {
  public async findByEmail(email: string): Promise<User | null> {
    const user = User.findBy('email', email);
    return user;
  }

  public async isPasswordValid(user: User, password: string): Promise<boolean> {
    const verification = await hash.verify(user.password, password);
    return verification;
  }
}