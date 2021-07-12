import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentsPostPage } from './medicaments-post.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentsPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentsPostPageRoutingModule {}
