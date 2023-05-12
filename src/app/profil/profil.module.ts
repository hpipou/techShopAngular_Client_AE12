import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { OrderedComponent } from './ordered/ordered.component';
import { DeleteComponent } from './delete/delete.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    ProfilComponent,
    OrderedComponent,
    DeleteComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
