import e, { Router } from "express";
import { UserController } from "../../../controller/UserController";
import { User, UserProps } from "../../entity/User";
import { v4 as uuid } from "uuid";

const user_router = Router();

user_router.get("/", (req, res) => {
  res.send("User services working");
});

user_router.post("/save", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, last_name } = req.body;

    if (!email || !name) {
      return res.status(400).send(`Um dos campos veio num formato incorreto: ${JSON.stringify({ name, email })}`);
    }

    //    return;

    const first_name = name;

    //const user = User.create_new({ id: uuid(), first_name: name, last_name: last_name, email });

    const user = new User();
    user.id = uuid();
    user.last_name = last_name;
    (user.first_name = name), (user.email = email);

    const service = new UserController();

    const answer = await service.save(user);

    return res.status(201).send(answer);
  } catch (e) {
    console.error(e);
    return res.status(500).send("Unknown error");
  }
});
export { user_router };
