import { get_repository } from "../src/database";
import { Transaction } from "../src/entity/Transactions";

export class TransactionController {
  async save(transaction: Transaction) {
    const saved_transaction = await get_repository().save(transaction);

    return saved_transaction;
  }

  //   async get_all(user_id: String) {
  //     const transactions = await get_repository().findBy(Transaction, {: user_id });
  //   }
}
