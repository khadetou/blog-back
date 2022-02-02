import { prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

export class Author {
  @prop({ required: true })
  @IsString()
  name: string;
  @prop()
  @IsString()
  photo: string;
  @prop()
  @IsString()
  bio: string;
}
