import { Address } from "src/address/address.entity";
import { Persons } from "../../shared/interfaces/Persons.interface";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Business implements Persons {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string;

  @Column({unique: true})
  cnpj: string;
  
  @OneToOne(() => Address, { nullable: true, cascade: true })
  @JoinColumn()
  public address: Address;

  @Column()
  telephone: string;

  @Column()
  billing: number;

  constructor(name: string, cnpj: string, telephone: string, billing: number, id?: string ){
    this.name = name;
    this.cnpj = cnpj;
    this.telephone = telephone;
    this.billing = billing
    if(!id){
      this.id = id
    }
  }
}
