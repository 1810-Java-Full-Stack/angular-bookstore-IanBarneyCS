import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BOOKS } from './mock-books';
import { Book } from './book';
import { AUTHORS } from './mock-authors';
import { Author } from './author';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  books;

  url : string = "http://ec2-18-205-114-17.compute-1.amazonaws.com:8080/BookstoreMVC/";

  constructor(private http:HttpClient) { }

  getBook(id:number): Observable<Book>{
    return this.http.get<Book>(this.url+"book/"+id);
  }

  getAuthor(id:number): Observable<Author>{
    return this.http.get<Author>(this.url+"author/"+id);
  }

  getBooks(){
    return this.http.get<Book[]>(this.url + "book");
  }

  updateBook(book:Book){
    this.http.put(this.url+"book",book);
  }

  updateAuthor(author:Author){
    this.http.put(this.url+"author", author);
  }

  sendBooks(){
    return this.books;
  }
}
