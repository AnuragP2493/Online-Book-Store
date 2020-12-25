import { Book } from './../search/search.interface';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as booksSelector from './books.selector';
import {
  loadBooks,
  removeFromCart,
  addedToCart,
  addedToCollection,
  addUser,
} from './books.actions';

@Injectable()
export class BooksFacade {
  constructor(private store: Store) {}

  AllBooks$ = this.store.select(booksSelector.selectAllBooks) as Observable<
    Book[]
  >;
  cartItems$ = this.store.select(booksSelector.selectCartItem) as Observable<
    Book[]
  >;
  collectionItem$ = this.store.select(
    booksSelector.selectCollectionItem
  ) as Observable<Book[]>;
  searchTerm$ = this.store.select(
    booksSelector.selectSearchTerm
  ) as Observable<string>;
  User$ = this.store.select(booksSelector.selectUser) as Observable<any>;

  loadBooks(payload): void {
    // payload.toString();
    this.store.dispatch(loadBooks(payload));
  }

  addToCart(book): void {
    this.store.dispatch(addedToCart(book));
  }

  addToCollection(book): void {
    this.store.dispatch(addedToCollection(book));
  }

  addUser(user): void {
    this.store.dispatch(addUser(user));
  }

  removeFromCart(id): void {
    this.store.dispatch(removeFromCart({ id }));
  }
}
