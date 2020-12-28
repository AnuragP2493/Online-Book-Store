import { Action, createReducer, on } from '@ngrx/store';
import { Book, User } from '../shared/search.interface';
import * as bookActions from './books.actions';

export interface State {
  User: User;
  AllBooks: Book[];
  loaded: boolean;
  cartItems: Book[];
  collectionItems: Book[];
  searchTerm: string;
}

export const bookReducerKey = 'book';

const initalUser: User = {
  name: '',
  email: '',
  mobile: '',
  address: '',
};

export const initialState: State = {
  User: initalUser,
  AllBooks: [],
  loaded: false,
  cartItems: [],
  collectionItems: [],
  searchTerm: '',
};

const scoreboardReducer = createReducer(
  initialState,
  on(bookActions.booksLoaded, (state, action) => ({
    ...state,
    AllBooks: action.books,
    loaded: true,
  })),

  on(bookActions.loadBooks, (state, action) => ({
    ...state,
    searchTerm: action.searchTerm,
  })),

  on(bookActions.addedToCart, (state, action) => {
    return Object.assign({
      ...state,
      cartItems: [...state.cartItems, action.book],
    });
  }),

  on(bookActions.addedToCollection, (state, action) => ({
    ...state,
    collectionItems: [...state.collectionItems, action.book],
  })),

  on(bookActions.addUser, (state, action) => ({ ...state, User: action.user })),

  on(bookActions.removeFromCart, (state, action) => {
    return Object.assign({
      ...state,
      cartItems: state.cartItems.filter((items) => items.id !== action.id),
    });
  })
);

export function reducer(state: State | undefined, action: Action): any {
  return scoreboardReducer(state, action);
}
