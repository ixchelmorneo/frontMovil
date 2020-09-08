import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {LoginService} from 'src/app/services/login.service'
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string="martinez";
  password:string="123456";

  constructor(
    private modalController: ModalController,
    private loginService: LoginService,
    private navCtrl: NavController,
    private alertService:AlertService
    ) { }

  ngOnInit() {
  }
  
  dismissLogin() {
    this.modalController.dismiss();
  }

  login(form:NgForm) {
    console.log(this.username);
    console.log(this.password);
    this.loginService.login(this.password,this.username).subscribe(
      data => {
        console.log(data);
        console.log(data.accessToken);
        //this.alertService.presentToast("Logueado");
      }/*,
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/inicio');
      }*/
    );
  }

}
