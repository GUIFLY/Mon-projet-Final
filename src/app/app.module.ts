import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { ApiServiceProvider } from 'src/providers/api-service/api-service';
import { ApiProvider } from 'src/providers/api/api';
import { AuthServiceProvider } from 'src/providers/auth-service/auth-service';
import { ConstantProvider } from 'src/providers/constant/constant';
import { UsersProvider } from 'src/providers/users/users';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { BLE } from '@ionic-native/ble/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClientModule,
    AuthServiceProvider,
    BluetoothSerial,
    BLE,
    ApiServiceProvider,
    UsersProvider,
    ConstantProvider,
    ApiProvider,],
  bootstrap: [AppComponent],
})
export class AppModule {}
