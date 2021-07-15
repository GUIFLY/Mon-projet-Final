import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeleconsultationPageRoutingModule } from './teleconsultation-routing.module';

import { TeleconsultationPage } from './teleconsultation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    TeleconsultationPageRoutingModule
  ],
  declarations: [TeleconsultationPage]
})
export class TeleconsultationPageModule {}
