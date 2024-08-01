import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Address } from 'src/address/address.entity';


export class UpdatePersonDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  // @IsString()
  // @IsNotEmpty()
  // address: Address;
  @IsString()
  zipcode?: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsNumber()
  salary: number;
}


