import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClientModule }    from '@angular/common/http';

// HttpClienteModule
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
>>>>>>> 976c9a205b44c592976b6ecbc10795bf4a46b4cf
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
