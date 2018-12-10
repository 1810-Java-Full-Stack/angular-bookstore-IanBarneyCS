import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: 'detail/:id', component: DetailViewComponent },
  { path: 'book', component: BookComponent },
  { path: 'author/:id', component: AuthorComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
