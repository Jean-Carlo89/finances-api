import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({
    name: "First_Name",
    length: 50,
  })
  first_name: string;

  @Column({
    length: 50,
  })
  last_name: string;

  @Column()
  email: string;
}
