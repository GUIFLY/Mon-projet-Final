import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedExamenPage } from './med-examen.page';

const routes: Routes = [
  {
    path: '',
    component: MedExamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedExamenPageRoutingModule {}
