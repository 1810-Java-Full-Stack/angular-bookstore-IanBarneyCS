import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from '../book';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = BOOKS;
  selectedBook : Book = this.books[0];

  constructor(public router: Router,) { }

  ngOnInit() {
  }

  onSelect(book: Book): void {
    console.log('getting details');
    this.router.navigate(['detail/'+book.id]);
  }

}
