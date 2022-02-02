import { Category } from './../category/category.model';
import { Author } from './../author/author.model';
import { prop, Ref } from '@typegoose/typegoose';
import { IsBoolean, IsString } from 'class-validator';

export class Post {
  @prop({ ref: () => Author })
  author: Ref<Author>;
  @prop({ ref: () => Category })
  category: Ref<Category>;
  @prop({ required: true })
  @IsString()
  title: string;
  @prop({ required: true })
  @IsString()
  exerpt: string;
  @prop({ required: true })
  @IsString()
  content: string;
  @prop()
  @IsString()
  featuredImage: string;
  @prop({ required: true })
  @IsBoolean()
  isFeatured: boolean;
}
