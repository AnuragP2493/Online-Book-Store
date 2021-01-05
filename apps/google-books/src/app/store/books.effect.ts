import { BooksService } from './../search/books.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import * as booksAction from './books.actions';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private bookService: BooksService) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(booksAction.loadBooks),
      mergeMap((action) =>
        this.bookService.getAllBooks(action.searchTerm).pipe(
          map(
            (books) => ({ type: '[Load Books] Search', books: books }),
            catchError(() => EMPTY)
          )
        )
      )
    )
  );
}
