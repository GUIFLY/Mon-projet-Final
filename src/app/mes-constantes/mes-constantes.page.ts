import { Component, NgZone, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { NavController, ToastController } from '@ionic/angular';

const THERMOMETER_SERVICE = 'bbb0';

@Component({
  selector: 'app-mes-constantes',
  templateUrl: './mes-constantes.page.html',
  styleUrls: ['./mes-constantes.page.scss'],
})
export class MesConstantesPage implements OnInit {


   // devices: any[] = [{name: "Connect"}, {name: "Second Connect"}];
  // serialData: any[] = [
  //   {data:"BP1:1", out: false},
  //   {data:"ecran:1", out: true},
  // ];

  devices: any[] = [];
  statusMessage: string;

  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private ble: BLE,
    private ngZone: NgZone) { }
    
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.scan();
  }

  scan() {
    this.setStatus('Scan des appareils bluetooth');
    this.devices = [];  // clear list

    this.ble.scan([THERMOMETER_SERVICE], 5).subscribe(
      device => this.onDeviceDiscovered(device), 
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complet');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  // If location permission is denied, you'll end up here
  async scanError(error) {
    this.setStatus('Error ' + error);
    let toast = this.toastCtrl.create({
      message: 'Erreur lors du scan Bluetooth',
      position: 'middle',
      duration: 5000
    });
    (await toast).present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  deviceSelected(device) {
    console.log(JSON.stringify(device) + ' selected');
    this.navCtrl.navigateForward("/mes-constantes2", {
      // device: device
    });
  }
  ngOnInit() {
  }

}