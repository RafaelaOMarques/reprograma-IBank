import { Persons } from "../../persons/interfaces/Persons.interface";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Business implements Persons {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string;

  @Column()
  cnpj: string;
  
  @Column()
  address: string;

  @Column()
  telephone: string;

  @Column()
  billing: number;
}
