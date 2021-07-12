import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AakeycloakPage } from './aakeycloak.page';

const routes: Routes = [
  {
    path: '',
    component: AakeycloakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AakeycloakPageRoutingModule {}
