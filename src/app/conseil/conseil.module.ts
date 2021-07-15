import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConseilPageRoutingModule } from './conseil-routing.module';

import { ConseilPage } from './conseil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    ConseilPageRoutingModule
  ],
  declarations: [ConseilPage]
})
export class ConseilPageModule {}
