import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Transaction } from "./Transactions";

@Entity("users")
export class User extends BaseEntity {
  // constructor(props: UserProps) {
  //   this.id = props.id;
  //   this.first_name = props.first_name;
  //   this.last_name = props.last_name;
  //   this.email = props.email;
  // }

  @PrimaryColumn()
  id: string;

  @Column({
    name: "First_Name",
    length: 50,
  })
  first_name: string;

  @Column({
    length: 50,
    nullable: true,
  })
  last_name: string;

  @Column()
  email: string;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];

  static save_new(user: UserProps): User {
    return this.create({ ...user });
  }
}

export type UserProps = {
  id?: string;
  first_name: string;
  last_name?: string;
  email: string;
};
