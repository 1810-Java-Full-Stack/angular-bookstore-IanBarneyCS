import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author : Author;

  constructor(private route: ActivatedRoute,
    private bookService: BookServiceService) { }

  ngOnInit() {
    this.setAuthor();
  }

  updateAuthor(){
    this.bookService.updateAuthor(this.author);
  }

  setAuthor(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.bookService.getAuthor(id).subscribe(author => this.author = author);
  }

}
