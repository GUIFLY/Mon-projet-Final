import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlocPostDetailPageRoutingModule } from './bloc-post-detail-routing.module';

import { BlocPostDetailPage } from './bloc-post-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlocPostDetailPageRoutingModule
  ],
  declarations: [BlocPostDetailPage]
})
export class BlocPostDetailPageModule {}
