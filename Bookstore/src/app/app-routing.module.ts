import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
  { path: 'detail/:id', component: DetailViewComponent }
  { path: 'book/', component: BookComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
