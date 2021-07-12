import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { AppointmentInterface, AppointmentType } from 'src/model/Appointment';
import { AppointmentScheduleInterface } from 'src/model/AppointmentSchedule';
import { DoctorsProfileInterface } from 'src/model/DoctorsProfile';
import { BookAppointmentConfirmationPage } from '../book-appointment-confirmation/book-appointment-confirmation.page';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit {

  
  date: string;
  // type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  // // calenderOptions: CalendarComponentOptions = {
  // //   from: new Date()
  // // };
  appointmentAvailable: boolean = false;
  selectedShiftTime: Array<String>;
  selectedDate: string;
  selectedTime: string;

  doctorProfile: DoctorsProfileInterface;


  appointmentShifts: Array<AppointmentScheduleInterface> = [
    {id: "1", shiftName: "Evening", availableTime: ["6.00 PM ", "6.30 PM ", "7.00 PM ", "8.30 PM"]},
    {id: "2", shiftName: "Night", availableTime: ["9.00 PM ", "9.30 PM ", "10.00 PM ", "11.30 PM"]}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalController: ModalController) {

      if (this.navParams.data != undefined) {
        this.doctorProfile = this.navParams.data;
      }
  }

  ngOnInit() {
  }
  
  onDateSelected(date) {
    /** Check here if appointment is available or not **/
    this.appointmentAvailable = true;
    if (this.appointmentShifts) {
      this.selectedShiftTime = this.appointmentShifts[0].availableTime;
    }
    this.selectedDate = date;

  }

  shiftSelected($event: any) {
    let shift = this.appointmentShifts.find((value => {
      return value.id == $event.value
    }));
    this.selectedShiftTime = shift.availableTime;
  }

  timeOnClick(time: string) {
    this.selectedTime = time;
    this.openConfirmatModal(this.selectedDate, this.selectedTime);
  }

  private async openConfirmatModal(selectedDate: string, selectedTime: string) {


    let appointment: AppointmentInterface = {
      doctorProfile: this.doctorProfile, appointment_time: selectedTime,
      appointment_date: this.selectedDate, appointment_type: AppointmentType.VIDEO_CONSULTATION
    };

  //   // let confirmModal = this.modalController.create(BookAppointmentConfirmationPage, {
  //   //   date: selectedDate,
  //   //   time: selectedTime
  //   // });
  //   // (await confirmModal).present();


  //   confirmModal.onDidDismiss((data) => {
  //     if (data.confirm) {
  //       this.navCtrl.navigateForward('/BookAppointmentConfirmationPage', appointment);
  //     }
  //   });
  }


}
