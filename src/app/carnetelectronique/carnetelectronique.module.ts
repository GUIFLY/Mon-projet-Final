import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnetelectroniquePageRoutingModule } from './carnetelectronique-routing.module';

import { CarnetelectroniquePage } from './carnetelectronique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnetelectroniquePageRoutingModule
  ],
  declarations: [CarnetelectroniquePage]
})
export class CarnetelectroniquePageModule {}
