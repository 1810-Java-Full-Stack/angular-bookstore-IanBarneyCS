import { Injectable } from '@angular/core';
import { BOOKS } from './mock-books';
import { Book } from './book';
import { AUTHORS } from './mock-authors';
import { Author } from './author';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  getBook(id:number): Observable<Book>{
    for (let book of BOOKS){
      if(book.id == id){
        return of(book);
      }
    }
  }

  getAuthor(id:number): Observable<Author>{
    for(let author of AUTHORS){
      if(author.id == id){
        return of(author);
      }
    }
  }
}
