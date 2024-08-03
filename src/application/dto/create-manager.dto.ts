import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Address } from "src/domain/entities/address.entity";
import { ManagerEnum } from "src/domain/shared/enuns/ManagerEnum";

export class CreateManagerDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsNumber()
  salary: number;

  @IsString()
  @IsNotEmpty()
  address: Address;
  
  @IsString()
  zipCode?: string;
  
  @IsNotEmpty()
  @IsEnum(ManagerEnum)
  managerType: ManagerEnum;
}
