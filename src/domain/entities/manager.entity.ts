import { ManagerEnum } from "../shared/enuns/ManagerEnum";
import { PersonsPhysical } from "../shared/interfaces/PersonsPhysical.interface";
import { Address } from "src/_domain/entities/address.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manager implements PersonsPhysical {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  name: string;

  @Column({unique: true})
  cpf: string;

  @OneToOne(() => Address, { nullable: true, cascade: true })
  @JoinColumn()
  address: Address;
  
  @Column()
  telephone: string;

  @Column()
  salary:number;

  @Column({ type: 'enum', enum: ManagerEnum, nullable: false  })
  managerType: ManagerEnum;

  constructor(
    name: string,
    cpf: string,
    telephone: string,
    salary: number,
    managerType: ManagerEnum,
    address?: Address,
    id?: string
  ) {
    this.name = name;
    this.cpf = cpf;
    this.address = address;
    this.telephone = telephone;
    this.salary = salary;
    this.managerType = managerType;
    if(!id){
      this.id = id
    }
  }

}

