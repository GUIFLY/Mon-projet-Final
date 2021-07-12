import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAppointmentConfirmationPage } from './book-appointment-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: BookAppointmentConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAppointmentConfirmationPageRoutingModule {}
