import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedConseilPageRoutingModule } from './med-conseil-routing.module';

import { MedConseilPage } from './med-conseil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedConseilPageRoutingModule
  ],
  declarations: [MedConseilPage]
})
export class MedConseilPageModule {}
