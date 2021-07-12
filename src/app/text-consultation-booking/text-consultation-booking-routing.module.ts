import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextConsultationBookingPage } from './text-consultation-booking.page';

const routes: Routes = [
  {
    path: '',
    component: TextConsultationBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextConsultationBookingPageRoutingModule {}
