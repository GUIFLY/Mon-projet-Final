import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestgetPageRoutingModule } from './testget-routing.module';

import { TestgetPage } from './testget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    TestgetPageRoutingModule
  ],
  declarations: [TestgetPage]
})
export class TestgetPageModule {}
