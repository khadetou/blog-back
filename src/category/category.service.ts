import { ReturnModelType } from '@typegoose/typegoose';
import { Category } from './category.model';
import { InjectModel } from 'nestjs-typegoose';
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: ReturnModelType<typeof Category>,
  ) {}

  //Create category
  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const { name } = createCategoryDto;
    const category = new this.categoryModel({ name });
    return category.save();
  }
}
