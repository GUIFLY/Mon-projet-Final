import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iconst1Page } from './iconst1.page';

const routes: Routes = [
  {
    path: '',
    component: Iconst1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iconst1PageRoutingModule {}
