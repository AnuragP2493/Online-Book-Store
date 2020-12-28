import { map } from 'rxjs/operators';
import { BooksFacade } from '../../store/books.fascade';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../shared/search.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  selectedBook$: Observable<Book>;
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private booksFacade: BooksFacade
  ) {}

  ngOnInit(): void {
    let bookId;
    this.activateRoute.params.subscribe((data) => {
      bookId = data.id;
    });
    if (bookId) {
      this.selectedBook$ = this.booksFacade.AllBooks$.pipe(
        map((books) => books.filter((book) => book.id === bookId)[0])
      );
    }
  }

  addToCart(): void {
    this.selectedBook$.subscribe((data) =>
      this.booksFacade.addToCart({ book: data })
    );
  }

  toBuy(): void {
    this.selectedBook$.subscribe((data) =>
      this.booksFacade.addToCollection({ book: data })
    );
    this.router.navigate(['/billing']);
  }
}
