import { Address } from "src/domain/entities/address.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { PersonsLegal } from "src/domain/shared/interfaces/PersonsLegal.interface";

@Entity()
export class Business implements PersonsLegal {
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
