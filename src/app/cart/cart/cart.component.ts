import { Observable } from 'rxjs';
import { BooksFacade } from 'src/app/store/books.fascade';
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
  cartItems$: Observable<Book[]>;
  constructor(private cartService: CartService, private bookFascade: BooksFacade , private router: Router) { }

  ngOnInit(): void {
     this.cartItems$ = this.bookFascade.cartItems$;
  }

  toBuy(book): void{
    this.bookFascade.addToCollection({book});
    this.router.navigate(['/billing']);
  }

  RemoveCart(id: string): void{
    this.cartService.removeFromCart(id);
<<<<<<< HEAD
=======
    this.bookFascade.removeFromCart(id);
>>>>>>> 217c2cb
  }

}
