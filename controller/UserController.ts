import { get_repository } from "../src/database";
import { User, UserProps } from "../src/entity/User";
const repository = get_repository();

export class UserController {
  async save(user: User) {
    const saved_user = await repository.save(user);

    // repository.findOne(User,{})
    return saved_user;
  }
}
