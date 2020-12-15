import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { MaterialModule } from '../material/material.module';
import { BillingRoutingModule } from './billing-routing.module';



@NgModule({
  declarations: [BillingComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
    MaterialModule
  ]
})
export class BillingModule { }
