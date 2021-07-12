import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestgetPage } from './testget.page';

const routes: Routes = [
  {
    path: '',
    component: TestgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestgetPageRoutingModule {}
