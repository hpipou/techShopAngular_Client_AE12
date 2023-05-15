import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { OrderedComponent } from './ordered/ordered.component';
import { DeleteComponent } from './delete/delete.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {path:'', component:ProfilComponent},
  {path:'ordered', component:OrderedComponent},
  {path:'delete', component:DeleteComponent},
  {path:'password', component:PasswordComponent},
  {path:'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
