import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchRoutingModule } from './search.module-routing';
import { MaterialModule } from '../material/material.module';
import { BooksService } from './books.service';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchBarComponent, BookComponent, BookDetailComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers : [BooksService],
  exports : [SearchRoutingModule]
})
export class SearchModule { }
