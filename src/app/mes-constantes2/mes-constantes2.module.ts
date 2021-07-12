import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesConstantes2PageRoutingModule } from './mes-constantes2-routing.module';

import { MesConstantes2Page } from './mes-constantes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    MesConstantes2PageRoutingModule
  ],
  declarations: [MesConstantes2Page]
})
export class MesConstantes2PageModule {}
