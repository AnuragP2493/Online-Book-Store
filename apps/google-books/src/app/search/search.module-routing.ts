import { BookDetailComponent } from './book-detail/book-detail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '' , component: SearchBarComponent},
  {path : 'detail/:id' , component : BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
