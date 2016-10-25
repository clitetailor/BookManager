import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Manager';

  constructor(bookService: BookService) 
  {
    bookService.getBooks((books) =>
    {
      console.log(books);
    });
  }
}
