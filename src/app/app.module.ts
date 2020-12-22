import { reducer } from './store/books.reducer';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/books.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as bookReducer from './store/books.reducer';
import { BooksFacade } from './store/books.fascade';
import { reducers } from './store/books.selector';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    // StoreModule.forRoot({book :bookReducer.reducer}, {}),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BooksEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [BooksFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
