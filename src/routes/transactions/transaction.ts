import e, { Router } from "express";
import { UserController } from "../../../controller/UserController";
import { User, UserProps } from "../../entity/User";
import { v4 as uuid } from "uuid";
import { TransactionController } from "../../../controller/TransactionController";
import { Transaction } from "../../entity/Transactions";

const transactions_router = Router();

transactions_router.get("/", (req, res) => {
  res.send("User services working");
});

transactions_router.post("/save", async (req, res) => {
  try {
    const { value, date, description, type, user_id } = req.body;

    const user_controller = new UserController();
    const user = await user_controller.get_user(user_id);
    if (!user) {
      return res.status(404).send("No user found");
    }

    const transaction = new Transaction({ value, date: new Date(date), description, type, user });

    const service = new TransactionController();

    const answer = await service.save(transaction);

    return res.status(200).send(transaction);

    return res.status(201).send(answer);
  } catch (e) {
    console.error(e);
    return res.status(500).send("Unknown error");
  }
});

// transactions_router.get("/get", async (req, res) => {
//   try {
//     const service = new TransactionController();

//     const answer = await service.get_all();

//     return res.status(201).send(answer);
//   } catch (e) {
//     console.error(e);
//     return res.status(500).send("Unknown error");
//   }
// });
export { transactions_router };
