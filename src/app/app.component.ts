import { Component, OnInit, NgZone } from '@angular/core';
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

  errors: String[] = [];

  constructor(private bookService: BookService, private ngZone: NgZone) { }

  ngOnInit()
  {
    this.getBooks();
  }


  private handleError(err)
  {
    this.errors.push(err);
  }

  onRemoveErrorMsg(id)
  {
    this.errors.splice(id);
  }

  private getBooks()
  {
    this.bookService.getBooks()
      .then((books: Book[]) =>
      {
        this.books = books;
      })
      .catch(err => this.handleError(err));
  }

  private updateBook(book: Book)
  {
    this.bookService.updateBook(book)
      .then((books: Book[]) =>
      {
        this.books = books;
      })
      .catch(err => this.handleError(err));
  }

  private insertBook(book: Book)
  {
    this.bookService.insertBook(book)
      .then((books: Book[]) =>
      {
        this.books = books;
      })
      .catch(err => this.handleError(err));
  }

  private deleteBook(book: Book)
  {
    this.bookService.deleteBook(book)
      .then((books: Book[]) =>
      {
        this.books = books;
      })
      .catch(err => this.handleError(err));
  }


  onBookSelect(book: Book)
  {
    if (book === this.selectedBook)
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

  onDelete()
  {
    this.deleteBook(this.selectedBook);
    this.selectedBook = new Book();
    this.selected = false;
  }
}