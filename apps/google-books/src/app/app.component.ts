import { BooksFacade } from '../app/store/books.fascade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cartItems = 3;
  title = 'google-books';
  constructor(private bookFascade: BooksFacade) {}

  ngOnInit(): void {
    this.bookFascade.cartItems$.subscribe((data) => {
      this.cartItems = data.length;
    });
  }
}
