import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedMedicamentsPageRoutingModule } from './med-medicaments-routing.module';

import { MedMedicamentsPage } from './med-medicaments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedMedicamentsPageRoutingModule
  ],
  declarations: [MedMedicamentsPage]
})
export class MedMedicamentsPageModule {}
