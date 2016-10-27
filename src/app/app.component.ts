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

  selectedBook: Book = new Book();
  selected: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit()
  {
    this.getBooks();
  }

  private getBooks()
  {
    this.bookService.getBooks()
      .then((books: Book[]) =>
      {
        this.books = books;
      });
  }

  updateBook(book: Book)
  {
    this.bookService.updateBook(book)
      .then((books: Book[]) =>
      {
        this.books = books;
      });
  }

  insertBook(book: Book)
  {
    this.bookService.insertBook(book)
      .then((books: Book[]) =>
      {
        this.books = books;
      });
  }


  onBookSelect(book: Book)
  {
    if (!!this.selected)
    {
      this.selectedBook = new Book();
      this.selected = false;
    }
    else
    {
      this.selectedBook = book;
      this.selected = true;
    }
  }

  onSubmit()
  {
    this.insertBook(this.selectedBook);
    this.selectedBook = new Book();
  }

  onUpdate()
  {
    this.updateBook(this.selectedBook);
    this.selectedBook = new Book();
    this.selected = false;
  }
}
