import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreatePersonDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsNumber()
  salary: number;
}

