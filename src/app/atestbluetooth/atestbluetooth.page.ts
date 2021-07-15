import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { NavController, NavParams, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-atestbluetooth',
  templateUrl: './atestbluetooth.page.html',
  styleUrls: ['./atestbluetooth.page.scss'],
})
export class AtestbluetoothPage implements OnInit {
  Devices

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private bluetoothSerial: BluetoothSerial, private alertController: AlertController) {
  }

  ActivarBluetooth() {
    this.bluetoothSerial.isEnabled().then(response => {
      this.Listdivices()
    }, error => {
      this.isEnabled("IsOff")
    })
  }

  Listdivices() {
    this.bluetoothSerial.list().then(response => {
      this.Devices = response
    }, error => {
      console.log("error")
    })
  }

  connect(address) {
    this.bluetoothSerial.connect(address).subscribe(success => {

    }, error => {
      console.log("error")
    })
  }

  deviceConnected() {
    this.bluetoothSerial.subscribe('/n').subscribe(success => {
      this.hundler(success)
    })
  }

  hundler(value) {
    console.log(value)
  }

  sebData(){
    this.bluetoothSerial.write("7").then(response=>{
      console.log("okay")
    }, error => {
      console.log("un problème")
    })
  }

  Disconnected(){
    this.bluetoothSerial.disconnect()
    console.log("dispositif déconnecté")
  }


  async isEnabled(msg) {
    const alert = await this.alertController.create({
      // header: 'Alerte',
      message: msg,
      buttons: [{
        text: 'okay',
        handler: () => {
          console.log("okay")
        }
      }]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtestBluetoothPage');
  }

  ngOnInit() {
  }

}
