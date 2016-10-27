import { Injectable } from '@angular/core';
import { Book } from './book';

import { Http, Response } from '@angular/http'

import { Observable }     from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class BookService {
  private bookCollectionURL = "http://localhost:8080/books";

  constructor(private http: Http) { }

  updateBook(book: Book)
  {
    return this.http.post(`${this.bookCollectionURL}\\${book._id}`, book)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  insertBook(book: Book)
  {
    console.log(book);
    return this.http.put(this.bookCollectionURL, book)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getBooks()
  {
    return this.http.get(this.bookCollectionURL)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  deleteBook(book: Book)
  {
    return this.http.delete(`${this.bookCollectionURL}\\${book._id}`)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response)
  {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any)
  {
    let errMsg: string;

    console.log(error);

    if (error instanceof Response)
    {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else
    {
      errMsg = error.message ? error.message : error.toString();
    }
    
    return Promise.reject(errMsg);
  }
}
