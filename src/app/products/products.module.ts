import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderedComponent } from './ordered/ordered.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    CartComponent,
    CheckoutComponent,
    OrderedComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
