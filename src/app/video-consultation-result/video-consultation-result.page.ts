import { Component, OnInit } from '@angular/core';
import { DoctorsProfileInterface } from 'src/model/DoctorsProfile';

@Component({
  selector: 'app-video-consultation-result',
  templateUrl: './video-consultation-result.page.html',
  styleUrls: ['./video-consultation-result.page.scss'],
})
export class VideoConsultationResultPage implements OnInit {

  doctorProfiles: Array<DoctorsProfileInterface> = [
    {
      id: "1",
      name: "Nadim Mahmud",
      fee_per_hour: "300",
      image: "assets/icon/doctor_speak.svg",
      specialist: "Pulmonologist, Allergist/ Immunologist",
      designation: "MBBS MD (Tuberculosis & Chest Diseases)",
      experience: "28 Years of Experience",
      speaking: "Speaks: English, Hindi, Bangla",
      specialized_in: " Interventional Pulmonology, Sleep Medicine , Snoring , Bronchoscopy, Thoracoscopy, Allergy Tsing , Sleep Lab, Ebus(Linexy & Radial), CRYO therapy."
    },
    {
      id: "1",
      name: "Nadim Mahmud",
      fee_per_hour: "300",
      image: "assets/icon/doctor_speak.svg",
      specialist: "Pulmonologist, Allergist/ Immunologist",
      designation: "MBBS MD (Tuberculosis & Chest Diseases)",
      experience: "28 Years of Experience",
      speaking: "Speaks: English, Hindi, Bangla",
      specialized_in: " Interventional Pulmonology, Sleep Medicine , Snoring , Bronchoscopy, Thoracoscopy, Allergy Tsing , Sleep Lab, Ebus(Linexy & Radial), CRYO therapy."
    },
    {
      id: "1",
      name: "Nadim Mahmud",
      fee_per_hour: "400",
      image: "assets/icon/doctor_speak.svg",
      specialist: "Pulmonologist, Allergist/ Immunologist",
      designation: "MBBS MD (Tuberculosis & Chest Diseases)",
      experience: "28 Years of Experience",
      speaking: "Speaks: English, Hindi, Bangla",
      specialized_in: " Interventional Pulmonology, Sleep Medicine , Snoring , Bronchoscopy, Thoracoscopy, Allergy Tsing , Sleep Lab, Ebus(Linexy & Radial), CRYO therapy."
    },
    {
      id: "1",
      name: "Nadim Mahmud",
      fee_per_hour: "500",
      image: "assets/icon/doctor_speak.svg",
      specialist: "Pulmonologist, Allergist/ Immunologist",
      designation: "MBBS MD (Tuberculosis & Chest Diseases)",
      experience: "28 Years of Experience",
      speaking: "Speaks: English, Hindi, Bangla",
      specialized_in: " Interventional Pulmonology, Sleep Medicine , Snoring , Bronchoscopy, Thoracoscopy, Allergy Tsing , Sleep Lab, Ebus(Linexy & Radial), CRYO therapy."
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
