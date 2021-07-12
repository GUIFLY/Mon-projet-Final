import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesConstantes2Page } from './mes-constantes2.page';

const routes: Routes = [
  {
    path: '',
    component: MesConstantes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesConstantes2PageRoutingModule {}
