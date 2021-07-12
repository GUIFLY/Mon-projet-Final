import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaladiePageRoutingModule } from './maladie-routing.module';

import { MaladiePage } from './maladie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaladiePageRoutingModule
  ],
  declarations: [MaladiePage]
})
export class MaladiePageModule {}
