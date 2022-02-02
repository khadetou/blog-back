import { Body, Controller, Post } from '@nestjs/common';
import { Author } from './author.model';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-autor.dto';

@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post()
  createAuthor(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorService.createAuthor(createAuthorDto);
  }
}
