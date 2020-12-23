import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { SearchBook } from '../search/search.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getAllBooks(id): Observable<SearchBook> {
    return this.http.get<SearchBook>(
      'https://www.googleapis.com/books/v1/volumes?q=' + id
    );
  }
}
