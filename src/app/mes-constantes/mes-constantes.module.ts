import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesConstantesPageRoutingModule } from './mes-constantes-routing.module';

import { MesConstantesPage } from './mes-constantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    MesConstantesPageRoutingModule
  ],
  declarations: [MesConstantesPage]
})
export class MesConstantesPageModule {}
