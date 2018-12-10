import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from '../book';
import { RouterModule, Routes, Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books: Book[];
  public selectedBook: Book;

  constructor(public router: Router,
    private bookService: BookServiceService) { }

  ngOnInit() {
    this.loadBooks();
  }

loadBooks(){
  this.bookService.getBooks().subscribe(
    (book) =>  {
      this.books = book;
      this.selectedBook = this.books[0];
    });
   
}

  onSelect(book: Book): void {
    console.log('getting details');
    this.router.navigate(['detail/'+book.id]);
  }

}
