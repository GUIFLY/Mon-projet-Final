import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentsPageRoutingModule } from './medicaments-routing.module';

import { MedicamentsPage } from './medicaments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    MedicamentsPageRoutingModule
  ],
  declarations: [MedicamentsPage]
})
export class MedicamentsPageModule {}
