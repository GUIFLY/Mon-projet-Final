import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoConsultationResultPageRoutingModule } from './video-consultation-result-routing.module';

import { VideoConsultationResultPage } from './video-consultation-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoConsultationResultPageRoutingModule
  ],
  declarations: [VideoConsultationResultPage]
})
export class VideoConsultationResultPageModule {}
