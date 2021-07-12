import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserconnectePageRoutingModule } from './userconnecte-routing.module';

import { UserconnectePage } from './userconnecte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    UserconnectePageRoutingModule
  ],
  declarations: [UserconnectePage]
})
export class UserconnectePageModule {}
