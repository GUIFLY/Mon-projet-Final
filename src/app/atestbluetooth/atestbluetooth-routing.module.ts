import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtestbluetoothPage } from './atestbluetooth.page';

const routes: Routes = [
  {
    path: '',
    component: AtestbluetoothPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtestbluetoothPageRoutingModule {}
