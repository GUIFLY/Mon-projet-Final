import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLabTestPageRoutingModule } from './page-lab-test-routing.module';

import { PageLabTestPage } from './page-lab-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLabTestPageRoutingModule
  ],
  declarations: [PageLabTestPage]
})
export class PageLabTestPageModule {}
