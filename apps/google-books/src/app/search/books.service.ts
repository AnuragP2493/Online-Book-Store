import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { SearchBook } from '../shared/search.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getAllBooks(searchTerm: string): Observable<SearchBook> {
    return this.http.get<SearchBook>(
      'http://localhost:5000/api/books/' + searchTerm
    );
  }
}
