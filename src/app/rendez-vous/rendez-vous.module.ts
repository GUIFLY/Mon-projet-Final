import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendezVousPageRoutingModule } from './rendez-vous-routing.module';

import { RendezVousPage } from './rendez-vous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RendezVousPageRoutingModule
  ],
  declarations: [RendezVousPage]
})
export class RendezVousPageModule {}
