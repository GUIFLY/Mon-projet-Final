import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageTreatmentCategoryPageRoutingModule } from './page-treatment-category-routing.module';

import { PageTreatmentCategoryPage } from './page-treatment-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageTreatmentCategoryPageRoutingModule
  ],
  declarations: [PageTreatmentCategoryPage]
})
export class PageTreatmentCategoryPageModule {}
