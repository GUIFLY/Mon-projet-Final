import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iconst1PageRoutingModule } from './iconst1-routing.module';

import { Iconst1Page } from './iconst1.page';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,
    FormsModule,
    IonicModule,
    Iconst1PageRoutingModule
  ],
  declarations: [Iconst1Page]
})
export class Iconst1PageModule {}
