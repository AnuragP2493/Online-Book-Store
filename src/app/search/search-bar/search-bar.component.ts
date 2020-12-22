import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BooksFacade } from 'src/app/store/books.fascade';
import { Book, SearchBook } from '../search.interface';
import { BooksService } from './../books.service';
import { constants } from 'buffer';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchData$: Observable<Book[]> ;
  searchTerm = '';
  constructor( private router: Router , private bookFascade: BooksFacade) { }

  ngOnInit(): void {
    this.searchData$ = this.bookFascade.AllBooks$;
    this.bookFascade.searchTerm$.subscribe(data => this.searchTerm = data);

  }

  searchBook(value: string): void{
    this.bookFascade.loadBooks({searchTerm: value});
  }

  onDetail(id: string): void {
    this.router.navigate(['/search/detail' , id] );
  }

}
