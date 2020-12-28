import { BooksFacade } from '../../store/books.fascade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, User } from '../../shared/search.interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  constructor(private bookFascade: BooksFacade) {}

  collection$: Observable<Book[]>;
  User$: Observable<User>;
  ngOnInit(): void {
    this.collection$ = this.bookFascade.collectionItem$;
    this.User$ = this.bookFascade.User$;
  }
}
