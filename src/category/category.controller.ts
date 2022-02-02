import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryService } from './category.service';
import { Body, Controller, Post } from '@nestjs/common';
import { Category } from './category.model';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }
}
