import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedConseilPage } from './med-conseil.page';

const routes: Routes = [
  {
    path: '',
    component: MedConseilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedConseilPageRoutingModule {}
