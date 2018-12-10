import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailViewComponent,
    ListViewComponent,
    BookComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
