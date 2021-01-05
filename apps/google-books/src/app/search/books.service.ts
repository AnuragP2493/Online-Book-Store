import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './../shared/search.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getAllBooks(searchTerm: string): Observable<Book[]> {
    return this.http.get<Book[]>(
      'http://localhost:5000/api/books/' + searchTerm
    );
  }
}
