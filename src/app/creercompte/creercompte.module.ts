import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreercomptePageRoutingModule } from './creercompte-routing.module';

import { CreercomptePage } from './creercompte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    CreercomptePageRoutingModule
  ],
  declarations: [CreercomptePage]
})
export class CreercomptePageModule {}
