import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { bookReducerKey, State } from './books.reducer';
import * as bookReducer from './books.reducer';



export interface BookState {
  book: bookReducer.State;
}

export const reducers: ActionReducerMap<BookState> = {
    book : bookReducer.reducer
  };

export const selectFeature = createFeatureSelector<BookState , State>(bookReducerKey);

export const selectCartItem = createSelector(
  selectFeature,
  (state: State ) => state.cartItems
);


export const selectAllBooks = createSelector(
    selectFeature,
    (state: State) => state.AllBooks
  );


export const selectCollectionItem = createSelector(
    selectFeature,
    (state: State) => state.collectionItems
  );

export const selectUser = createSelector(
    selectFeature,
    (state: State) => state.User
  );

export const selectSearchTerm = createSelector(
    selectFeature,
    (state: State) => state.searchTerm
  );


