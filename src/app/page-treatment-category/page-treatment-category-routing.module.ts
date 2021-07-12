import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTreatmentCategoryPage } from './page-treatment-category.page';

const routes: Routes = [
  {
    path: '',
    component: PageTreatmentCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTreatmentCategoryPageRoutingModule {}
