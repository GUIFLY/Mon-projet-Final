import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaladiePage } from './maladie.page';

const routes: Routes = [
  {
    path: '',
    component: MaladiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaladiePageRoutingModule {}
