import { prop } from '@typegoose/typegoose';
import { IsEmail, IsString } from 'class-validator';

export class Comment {
  @prop({ required: true })
  @IsString()
  name: string;
  @prop()
  @IsEmail()
  email: string;
  @prop({ required: true })
  @IsString()
  comment: string;
}
