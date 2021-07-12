import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MConstantesPageRoutingModule } from './m-constantes-routing.module';

import { MConstantesPage } from './m-constantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MConstantesPageRoutingModule
  ],
  declarations: [MConstantesPage]
})
export class MConstantesPageModule {}
