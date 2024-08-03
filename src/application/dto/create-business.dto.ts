import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Address } from "src/_domain/entities/address.entity";

export class CreateBusinessDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsNumber()
  billing: number;
  
  @IsString()
  @IsNotEmpty()
  address: Address;
  
  @IsString()
  zipCode?: string;

}
 