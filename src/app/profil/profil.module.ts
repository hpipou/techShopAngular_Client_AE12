import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { OrderedComponent } from './ordered/ordered.component';
import { DeleteComponent } from './delete/delete.component';
import { LogoutComponent } from './logout/logout.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    ProfilComponent,
    OrderedComponent,
    DeleteComponent,
    LogoutComponent,
    LeftsidebarComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfilModule { }
