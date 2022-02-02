import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './category.model';

@Module({
  imports: [ConfigModule, TypegooseModule.forFeature([Category])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
