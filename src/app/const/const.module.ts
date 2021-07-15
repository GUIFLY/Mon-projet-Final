import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstPageRoutingModule } from './const-routing.module';

import { ConstPage } from './const.page';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ConstPageRoutingModule
  ],
  declarations: [ConstPage]
})
export class ConstPageModule {}
