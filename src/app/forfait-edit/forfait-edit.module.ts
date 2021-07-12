import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForfaitEditPageRoutingModule } from './forfait-edit-routing.module';

import { ForfaitEditPage } from './forfait-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForfaitEditPageRoutingModule
  ],
  declarations: [ForfaitEditPage]
})
export class ForfaitEditPageModule {}
