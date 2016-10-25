import { Injectable } from '@angular/core';
import { Book } from './book';

import { MongoClient } from 'mongodb';
let url = 'mongodb://localhost:27017/bookstore';

import * as assert from 'assert';


@Injectable()
export class BookService {

  constructor() { }

  insertBook(...book: Book[])
  {
    MongoClient.connect(url, (err, db) =>
    {
      assert.equal(null, err, "Failed to connect to database");

      let bookCollection = db.collection("bookCollection");

      bookCollection.insert(book);

      db.close();
    })
  }

  getBooks(callback: (books) => void)
  {
    MongoClient.connect(url, (err, db) =>
    {
      assert.equal(null, err, "Failed to connect to database");

      let bookCollection = db.collection("bookCollection");

      bookCollection.find();

      db.close();
    })
  }

}
