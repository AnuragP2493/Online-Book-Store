import { CartService } from './cart/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartItems = 3;
  title = 'google-books';
  constructor(private cartService: CartService){
     this.cartService.cartItems$.subscribe(data => {
       this.cartItems = data.length;
     });
  }
}
