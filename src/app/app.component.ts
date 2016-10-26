import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'Book Manager';
  books: Book[] = [];


  constructor(private bookService: BookService) { }

  ngOnInit()
  {
    this.getBooks();
  }

  private getBooks()
  {
    this.bookService.getBooks()
      .subscribe((books: Book[]) =>
      {
        
      });
  }
}
