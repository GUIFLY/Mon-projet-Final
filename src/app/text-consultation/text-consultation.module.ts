import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextConsultationPageRoutingModule } from './text-consultation-routing.module';

import { TextConsultationPage } from './text-consultation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextConsultationPageRoutingModule
  ],
  declarations: [TextConsultationPage]
})
export class TextConsultationPageModule {}
