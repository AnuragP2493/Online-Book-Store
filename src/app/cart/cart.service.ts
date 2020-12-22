import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

import { Book } from './../search/search.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  books: any[] = [];
  public cartItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();
  detailedBook: Book;
  constructor(){}

  addToCart(book): void {
    this.books.push(book);
    this.cartItems.next(this.books);
  }

  removeFromCart(id: string): void {
   this.books = this.books.filter(book => book.id !== id);
   this.cartItems.next(this.books);
  }
}

