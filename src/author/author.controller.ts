import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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

	@Post('/upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File) {
		console.log(file);
	}
}
