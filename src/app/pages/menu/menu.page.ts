import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage  {



  data: any ={ valor: 'Robo'};
   
  constructor( private router: Router) { }

  navigateToUser(){

    const extras : NavigationExtras = {
      queryParams:{
        data: "Pelea"
      }
    };
   
    this.router.navigate(['/registro-incidencia'],extras);
          
        }



}
