import { Injectable } from '@angular/core';
import { Book } from './book';


@Injectable()
export class BookService {

  constructor() { }

  insertBook(...book: Book[])
  {

  }

  getBooks(callback: (books) => void)
  {
    
  }

}
