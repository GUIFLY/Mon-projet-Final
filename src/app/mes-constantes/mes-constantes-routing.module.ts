import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesConstantesPage } from './mes-constantes.page';

const routes: Routes = [
  {
    path: '',
    component: MesConstantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesConstantesPageRoutingModule {}
