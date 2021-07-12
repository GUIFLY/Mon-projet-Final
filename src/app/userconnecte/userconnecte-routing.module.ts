import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserconnectePage } from './userconnecte.page';

const routes: Routes = [
  {
    path: '',
    component: UserconnectePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserconnectePageRoutingModule {}
