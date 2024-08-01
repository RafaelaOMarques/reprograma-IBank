import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Persons } from "../../shared/interfaces/Persons.interface";
import { Address } from "src/address/address.entity";

@Entity()
export class Person implements Persons {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;
 
  @Column({unique: true})
  public cpf: string;

  @OneToOne(() => Address, { nullable: true, cascade: true })
  @JoinColumn()
  public address: Address;

  @Column()
  public telephone: string;

  @Column()
  public salary: number;

  constructor(
    name: string, cpf: string, telephone: string, salary: number, id?: string
  ){
    this.name = name;
    this.cpf = cpf;
    this.telephone = telephone;
    this.salary = salary
    if(!id){
      this.id = id
    }
  }

}
