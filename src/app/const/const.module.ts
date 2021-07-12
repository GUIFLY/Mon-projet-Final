import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstPageRoutingModule } from './const-routing.module';

import { ConstPage } from './const.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstPageRoutingModule
  ],
  declarations: [ConstPage]
})
export class ConstPageModule {}
