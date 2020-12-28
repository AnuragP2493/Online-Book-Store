import { Book } from '../shared/search.interface';
import { Store, StoreModule } from '@ngrx/store';
import { BooksFacade } from './books.fascade';
import { inject, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { reducers } from './books.selector';
import { Observable, of } from 'rxjs';
import * as fromAction from './books.actions';

describe('bookFascade', () => {
  let facade: BooksFacade;
  let store: Store;
  let book: Book[];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot(reducers)],
      providers: [BooksFacade],
    }).compileComponents();
    facade = TestBed.inject(BooksFacade);
  });

  beforeEach(() => {
    store = TestBed.inject(Store);
    book = [
      {
        kind: 'books#volume',
        id: '0BSOg0oHhZ0C',
        etag: 'sWJBeRbxMK0',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C',
        volumeInfo: {
          authors: ['sfs', 'sfsf'],
          title: 'Angular Momentum in Quantum Mechanics',
          publisher: 'Princeton University Press',
          publishedDate: '1996',
          description:
            'This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.',
          pageCount: 146,
          printType: 'BOOK',
          averageRating: 4,
          ratingsCount: 1,
          maturityRating: 'NOT_MATURE',
          allowAnonLogging: false,
          contentVersion: '2.1.2.0.preview.1',
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          language: 'en',
          previewLink:
            'http://books.google.co.in/books?id=0BSOg0oHhZ0C&pg=PA12&dq=angular&hl=&cd=1&source=gbs_api',
          infoLink:
            'http://books.google.co.in/books?id=0BSOg0oHhZ0C&dq=angular&hl=&source=gbs_api',
          canonicalVolumeLink:
            'https://books.google.com/books/about/Angular_Momentum_in_Quantum_Mechanics.html?hl=&id=0BSOg0oHhZ0C',
        },
        saleInfo: {
          country: 'IN',
          saleability: 'NOT_FOR_SALE',
          isEbook: false,
        },
        accessInfo: {
          country: 'IN',
          viewability: 'PARTIAL',
          embeddable: true,
          publicDomain: false,
          textToSpeechPermission: 'ALLOWED',
          epub: { isAvailable: false },
          pdf: {
            isAvailable: true,
            acsTokenLink:
              'http://books.google.co.in/books/download/Angular_Momentum_in_Quantum_Mechanics-sample-pdf.acsm?id=0BSOg0oHhZ0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
          },
          webReaderLink:
            'http://play.google.com/books/reader?id=0BSOg0oHhZ0C&hl=&printsec=frontcover&source=gbs_api',
          accessViewStatus: 'SAMPLE',
          quoteSharingAllowed: false,
        },
        searchInfo: {
          textSnippet:
            '<b>Angular</b> Momentum of a System of Particles PRELIMINARY REMARKS . In <br>\nclassical mechanics the <b>angular</b> momentum of a system of n particles relative to a <br>\npoint 0 is given by ( 2.2.1 ) 1 = įt : X : = ΣΙ . where Ii , Pi , and L ; are the position <br>\nvector&nbsp;...',
        },
      },
    ];
  });

  it('should be facade', () => {
    expect(facade).toBeTruthy();
  });

  it('should call action with seathterm', () => {
    const spy = spyOn(store, 'dispatch');
    facade.loadBooks({ searchTerm: 'java' });
    expect(spy).toHaveBeenCalledOnceWith(
      fromAction.loadBooks({ searchTerm: 'java' })
    );
  });
  it('should be add to cart action', () => {
    const spy = spyOn(store, 'dispatch');
    facade.addToCart({ book: book[0] });
    expect(spy).toHaveBeenCalledOnceWith(
      fromAction.addedToCart({ book: book[0] })
    );
  });

  it('should be add to collection action', () => {
    const spy = spyOn(store, 'dispatch');
    facade.addToCollection({ book: book[0] });
    expect(spy).toHaveBeenCalledOnceWith(
      fromAction.addedToCollection({ book: book[0] })
    );
  });

  it('should remove from cart ', () => {
    const spy = spyOn(store, 'dispatch');
    facade.removeFromCart('0BSOg0oHhZ0C');
    expect(spy).toHaveBeenCalledOnceWith(
      fromAction.removeFromCart({ id: '0BSOg0oHhZ0C' })
    );
  });

  it('should  add user ', () => {
    const user = {
      name: 'somename',
      email: 'some email',
      mobile: 'some mobile',
      address: 'some address',
    };
    const spy = spyOn(store, 'dispatch');
    facade.addUser({ user });
    expect(spy).toHaveBeenCalledOnceWith(fromAction.addUser({ user }));
  });
});
