import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoConsultationPageRoutingModule } from './video-consultation-routing.module';

import { VideoConsultationPage } from './video-consultation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoConsultationPageRoutingModule
  ],
  declarations: [VideoConsultationPage]
})
export class VideoConsultationPageModule {}
