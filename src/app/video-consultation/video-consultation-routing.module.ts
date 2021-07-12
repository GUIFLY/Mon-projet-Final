import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoConsultationPage } from './video-consultation.page';

const routes: Routes = [
  {
    path: '',
    component: VideoConsultationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoConsultationPageRoutingModule {}
