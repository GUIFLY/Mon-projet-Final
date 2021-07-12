import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthKeyPage } from './auth-key.page';

const routes: Routes = [
  {
    path: '',
    component: AuthKeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthKeyPageRoutingModule {}
