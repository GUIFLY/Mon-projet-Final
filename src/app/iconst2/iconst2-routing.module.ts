import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iconst2Page } from './iconst2.page';

const routes: Routes = [
  {
    path: '',
    component: Iconst2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iconst2PageRoutingModule {}
