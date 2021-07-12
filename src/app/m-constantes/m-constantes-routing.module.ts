import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MConstantesPage } from './m-constantes.page';

const routes: Routes = [
  {
    path: '',
    component: MConstantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MConstantesPageRoutingModule {}
