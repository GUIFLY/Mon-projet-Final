import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRendezVousPage } from './admin-rendez-vous.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRendezVousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRendezVousPageRoutingModule {}
