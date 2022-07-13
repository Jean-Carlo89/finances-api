import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";
@Entity("transactions")
export class Transaction extends BaseEntity {
  constructor(props?: TransactionProps) {
    super();
    this.id = props?.id || uuid();
    this.value = props?.value;
    this.description = props?.description;
    this.type = props?.type;
    this.date = props?.date;
    this.user = props?.user;
  }

  @PrimaryColumn()
  id: string;

  @Column({
    type: "float",
  })
  value: number;

  @Column()
  description: string;

  @Column()
  type: boolean;

  @Column()
  date: Date;

  @ManyToOne(() => User)
  user: User;
}

export type TransactionProps = {
  id?: string;
  value: number;
  description?: string;
  type: boolean;
  date: Date;
  user: User;
};
