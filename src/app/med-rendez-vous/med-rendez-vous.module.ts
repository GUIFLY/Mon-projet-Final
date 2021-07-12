import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedRendezVousPageRoutingModule } from './med-rendez-vous-routing.module';

import { MedRendezVousPage } from './med-rendez-vous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedRendezVousPageRoutingModule
  ],
  declarations: [MedRendezVousPage]
})
export class MedRendezVousPageModule {}
