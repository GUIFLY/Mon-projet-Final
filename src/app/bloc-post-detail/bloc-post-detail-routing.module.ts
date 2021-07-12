import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlocPostDetailPage } from './bloc-post-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BlocPostDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlocPostDetailPageRoutingModule {}
