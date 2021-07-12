import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedExamenPageRoutingModule } from './med-examen-routing.module';

import { MedExamenPage } from './med-examen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedExamenPageRoutingModule
  ],
  declarations: [MedExamenPage]
})
export class MedExamenPageModule {}
