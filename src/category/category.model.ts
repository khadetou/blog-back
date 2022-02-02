import { prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

export class Category {
  @prop({ required: true, unique: true })
  @IsString()
  name: string;
}
