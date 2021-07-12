import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLabTestPage } from './page-lab-test.page';

const routes: Routes = [
  {
    path: '',
    component: PageLabTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLabTestPageRoutingModule {}
