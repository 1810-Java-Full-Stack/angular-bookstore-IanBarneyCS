import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';
import { Author } from '../author';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  book : Book;
  author : Author;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookServiceService) { }

  ngOnInit() {
    this.getBook();
    this.getAuthor(this.book.id);
  }

  

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.bookService.getBook(id).subscribe(book => this.book = book);
  }

  getAuthor(id:number): void {
    this.bookService.getAuthor(id).subscribe(author => this.author = author);
    console.log("AUTHOR NAME: " + this.author.name);
  }

}
