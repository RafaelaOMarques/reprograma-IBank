import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Address } from 'src/domain/entities/address.entity';


export class CreatePersonDto {
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
  @IsNotEmpty()
  salary: number;

  @IsString()
  @IsNotEmpty()
  address: Address;
  
  @IsString()
  zipCode?: string;

}

