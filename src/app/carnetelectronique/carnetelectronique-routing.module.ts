import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarnetelectroniquePage } from './carnetelectronique.page';

const routes: Routes = [
  {
    path: '',
    component: CarnetelectroniquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarnetelectroniquePageRoutingModule {}
