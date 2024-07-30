import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Persons } from "../interfaces/Persons.interface";

@Entity()
export class Person implements Persons {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column()
  public name: string;
 
  @Column()
  public cpf: string;

  @Column()
  public address: string;

  @Column()
  public telephone: string;

  @Column()
  public salary: number;

  constructor(
    id: number, name: string, cpf: string, address: string, telephone: string,salary: number
  ){
    this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.address = address;
    this.telephone = telephone;
    this.salary = salary
  }

}
