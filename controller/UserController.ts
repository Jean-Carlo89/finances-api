import { get_repository } from "../src/database";
import { User, UserProps } from "../src/entity/User";
const repository = get_repository();

export class UserController {
  async save(user: User) {
    const saved_user = await repository.save(user);

    // repository.findOne(User,{})
    return saved_user;
  }

  async get_all(): Promise<User[]> {
    const users = await repository.find(User);

    return users;
  }

  async get_user(user_id: string): Promise<User> {
    const users = await repository.findOneBy(User, { id: user_id });

    return users;
  }

  async get_transactions(user_id: string) {
    const user = await repository.findOne(User, { where: { id: user_id }, relations: ["transactions"] });

    //  const transactions = await repository.findOneByOrFail(User, { id: user_id });

    return user.transactions;
  }
}
