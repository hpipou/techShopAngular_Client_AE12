import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderedComponent } from './ordered/ordered.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'show/:id', component:DetailsComponent},
  {path:'add', component:AddComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'ordered', component:OrderedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
