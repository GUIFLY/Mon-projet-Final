import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForfaitCreatePageRoutingModule } from './forfait-create-routing.module';

import { ForfaitCreatePage } from './forfait-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForfaitCreatePageRoutingModule
  ],
  declarations: [ForfaitCreatePage]
})
export class ForfaitCreatePageModule {}
