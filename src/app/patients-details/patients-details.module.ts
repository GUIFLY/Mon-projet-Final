import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientsDetailsPageRoutingModule } from './patients-details-routing.module';

import { PatientsDetailsPage } from './patients-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    PatientsDetailsPageRoutingModule
  ],
  declarations: [PatientsDetailsPage]
})
export class PatientsDetailsPageModule {}
