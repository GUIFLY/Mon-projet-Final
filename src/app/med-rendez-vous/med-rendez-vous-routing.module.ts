import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedRendezVousPage } from './med-rendez-vous.page';

const routes: Routes = [
  {
    path: '',
    component: MedRendezVousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedRendezVousPageRoutingModule {}
