import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsBoolean()
  isUpdated: boolean;
}
