import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/search/search.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Book[] = [];
  constructor(private cartService: CartService , private router: Router) { }

  ngOnInit(): void {
     this.cartService.cartItems$.subscribe(data => this.cartItems = data);
  }

  toBuy(): void{
    this.router.navigate(['/billing']);
  }

  RemoveCart(id: string): void{
    this.cartService.removeFromCart(id);
  }

}
