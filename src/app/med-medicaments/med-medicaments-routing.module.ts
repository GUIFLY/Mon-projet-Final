import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedMedicamentsPage } from './med-medicaments.page';

const routes: Routes = [
  {
    path: '',
    component: MedMedicamentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedMedicamentsPageRoutingModule {}
