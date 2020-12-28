import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { MaterialModule } from '../material/material.module';
import { BillingRoutingModule } from './billing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BillingComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BillingModule { }
