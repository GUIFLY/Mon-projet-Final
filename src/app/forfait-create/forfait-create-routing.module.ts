import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForfaitCreatePage } from './forfait-create.page';

const routes: Routes = [
  {
    path: '',
    component: ForfaitCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForfaitCreatePageRoutingModule {}
