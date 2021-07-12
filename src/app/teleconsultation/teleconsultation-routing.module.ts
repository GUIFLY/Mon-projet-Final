import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeleconsultationPage } from './teleconsultation.page';

const routes: Routes = [
  {
    path: '',
    component: TeleconsultationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeleconsultationPageRoutingModule {}
