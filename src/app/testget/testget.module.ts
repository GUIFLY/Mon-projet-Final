import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestgetPageRoutingModule } from './testget-routing.module';

import { TestgetPage } from './testget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestgetPageRoutingModule
  ],
  declarations: [TestgetPage]
})
export class TestgetPageModule {}
