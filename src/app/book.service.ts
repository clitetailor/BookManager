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

  }  

  insertBook(book: Book)
  {

  }

  getBooks()
  {
    return this.http.get(this.bookCollectionURL)
      .map(this.extractData)
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
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
