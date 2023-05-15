import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderedComponent } from './ordered/ordered.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { GuardGuard } from '../guard/guard.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'show/:id', component:DetailsComponent},
  {
    path:'add', component:AddComponent,
    canActivate:[GuardGuard]
  },
  {path:'cart', component:CartComponent},
  {
    path:'checkout', component:CheckoutComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'ordered', component:OrderedComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'edit/:id', component:EditComponent,
    canActivate:[GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
