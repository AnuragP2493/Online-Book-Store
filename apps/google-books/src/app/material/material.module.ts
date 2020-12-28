import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';

const materialComponent = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatBadgeModule
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    materialComponent
  ],
  exports : [materialComponent]
})
export class MaterialModule { }
