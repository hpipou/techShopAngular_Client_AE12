import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'user', loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)},
  {path:'profil', loadChildren: ()=> import('./profil/profil.module').then(m=>m.ProfilModule)},
  {path:'', loadChildren: ()=> import('./products/products.module').then(m=>m.ProductsModule)},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
