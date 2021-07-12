import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRendezVousPageRoutingModule } from './admin-rendez-vous-routing.module';

import { AdminRendezVousPage } from './admin-rendez-vous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRendezVousPageRoutingModule
  ],
  declarations: [AdminRendezVousPage]
})
export class AdminRendezVousPageModule {}
