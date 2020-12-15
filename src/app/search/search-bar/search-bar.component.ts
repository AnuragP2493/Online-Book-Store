import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SearchBook } from '../search.interface';

import { BooksService } from './../books.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchData: SearchBook ;
  searchTerm = '';
  constructor(private bookSearvice: BooksService , private router: Router) { }

  ngOnInit(): void {
    this.searchTerm = this.bookSearvice.searchTerm;
    if (this.searchTerm){
      this.bookSearvice.allBooks$.subscribe(data => {
      this.searchData = data;
      });
    }
  }

  searchBook(value: string): void{
    this.searchTerm = value ;
    this.bookSearvice.searchTerm = value;
    this.bookSearvice.getAllBooks(value);
    this.bookSearvice.allBooks$.subscribe(data => {
      this.searchData = data ;
    });
  }

  onDetail(id: string): void {
    this.router.navigate(['/search/detail' , id] );
  }

}
