import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iconst2PageRoutingModule } from './iconst2-routing.module';

import { Iconst2Page } from './iconst2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iconst2PageRoutingModule
  ],
  declarations: [Iconst2Page]
})
export class Iconst2PageModule {}
