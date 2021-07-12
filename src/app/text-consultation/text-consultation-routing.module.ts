import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextConsultationPage } from './text-consultation.page';

const routes: Routes = [
  {
    path: '',
    component: TextConsultationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextConsultationPageRoutingModule {}
