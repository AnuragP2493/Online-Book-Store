import { Cart } from './../../store/cart.reducer';
import { Observable } from 'rxjs';
import { BooksFacade } from '../../store/books.fascade';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../shared/search.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<Cart[]>;
  constructor(private bookFascade: BooksFacade, private router: Router) {}

  ngOnInit(): void {
    this.cartItems$ = this.bookFascade.cartItems$;
  }

  toBuy(book): void {
    this.bookFascade.addToCollection({ book });
    this.router.navigate(['/billing']);
  }

  RemoveCart(id: string): void {
    this.bookFascade.removeFromCart(id);
  }
}
