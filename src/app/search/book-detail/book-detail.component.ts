import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from './../books.service';
import { CartService } from './../../cart/cart.service';
import { Book, SearchBook} from '../search.interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  selectedBook: Book;
  constructor(private activateRoute: ActivatedRoute , private cartService: CartService , private bookService: BooksService) {
}

  ngOnInit(): void {
    let  bookId ;
    this.activateRoute.params.subscribe(data => {
      bookId = data.id;
    }) ;
    this.bookService.allBooks$.subscribe((books: SearchBook) => {
      this.selectedBook = books.items.filter(item => item.id === bookId)[0];
    }) ;
  }

  addToCart(): void{
    this.cartService.addToCart(this.selectedBook);
  }
}
