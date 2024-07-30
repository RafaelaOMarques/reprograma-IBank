import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBusinessDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsNumber()
  billing: number;
}
 