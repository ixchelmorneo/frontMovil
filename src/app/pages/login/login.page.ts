import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {LoginService} from 'src/app/services/login.service'
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { LoginUsuario } from 'src/app/models/LoginUsuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string="martinez";
  password:string="123456";
  usuario:LoginUsuario;
  

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
    //console.log(this.username);
    //console.log(this.password);
    this.usuario=new LoginUsuario(this.password,this.username);
    //console.log(this.usuario);
    this.loginService.login(this.usuario).subscribe(
      data => {
        console.log(JSON.stringify(data));
        //console.log(data.accessToken);
        this.alertService.presentToast("Logueado");
      },
      error => {
        console.log(error);
      }/*,
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/login');
      }*/
    );
  }

}
