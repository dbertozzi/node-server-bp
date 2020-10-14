import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length, IsEmail } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @Length(3)
  firstName: string;

  @Column({ nullable: false })
  @Length(3)
  lastName: string;

  @Column({ unique: true, nullable: false })
  @IsEmail()
  email: string;
}
