import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  photo: string;
  @IsString()
  bio: string;
}
