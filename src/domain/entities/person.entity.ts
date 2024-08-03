import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { PersonsPhysical } from "../shared/interfaces/PersonsPhysical.interface";
import { Address } from "src/_domain/entities/address.entity";

@Entity()
export class Person implements PersonsPhysical {
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
