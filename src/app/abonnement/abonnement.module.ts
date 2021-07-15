import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonnementPageRoutingModule } from './abonnement-routing.module';

import { AbonnementPage } from './abonnement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    AbonnementPageRoutingModule
  ],
  declarations: [AbonnementPage]
})
export class AbonnementPageModule {}
