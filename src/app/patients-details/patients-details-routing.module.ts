import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsDetailsPage } from './patients-details.page';

const routes: Routes = [
  {
    path: '',
    component: PatientsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsDetailsPageRoutingModule {}
