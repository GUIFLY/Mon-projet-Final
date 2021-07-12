import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextConsultationBookingPageRoutingModule } from './text-consultation-booking-routing.module';

import { TextConsultationBookingPage } from './text-consultation-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextConsultationBookingPageRoutingModule
  ],
  declarations: [TextConsultationBookingPage]
})
export class TextConsultationBookingPageModule {}
