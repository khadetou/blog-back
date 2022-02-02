import { CreateAuthorDto } from './dto/create-autor.dto';
import { Author } from './author.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author)
    private authorModel: ReturnModelType<typeof Author>,
  ) {}

  //Create author
  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const { name, photo, bio } = createAuthorDto;
    const author = new this.authorModel({ name, photo, bio });
    return author.save();
  }
}
