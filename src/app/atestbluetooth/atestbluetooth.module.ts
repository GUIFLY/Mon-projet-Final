import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtestbluetoothPageRoutingModule } from './atestbluetooth-routing.module';

import { AtestbluetoothPage } from './atestbluetooth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtestbluetoothPageRoutingModule
  ],
  declarations: [AtestbluetoothPage]
})
export class AtestbluetoothPageModule {}
