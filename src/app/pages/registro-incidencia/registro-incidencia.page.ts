import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServiciosService } from '../../servicios.service';

@Component({
  selector: 'app-registro-incidencia',
  templateUrl: './registro-incidencia.page.html',
  styleUrls: ['./registro-incidencia.page.scss'],
})
export class RegistroIncidenciaPage implements OnInit {

  
  dateInicio;
  dataTermino;
  descripcion;
  latitud;
  longitud;
  nivelRiesgo;
  publico;
  tipoAlarma;
  tipoIncidencia;
  titulo;

  




  data: any;
  constructor(public route: Router, public servicio: ServiciosService, public toastCtrl: ToastController){}


  enviarDatos(){ 
    console.log("prueba");

    const dataFormulario = {
      for_dateInicio: '2020-10-21T05:30', 
      for_dateTermino: '2020-10-21T05:30',
      for_descripcion: 'Celular',
      for_latitud: 9,
      for_longitud: 9,
      for_nivelRiesgo: 'Alto',
      for_publico: 'true',
      for_tipoAlarma: 'boton',
      for_tipoIncidencia: 'INCIDENCIA_ROBO',
      for_titulo: 'Robo'
      
    }

    this.servicio.enviarFormulario(dataFormulario).subscribe(res => {
      console.log(res);
      this.presentToast('Datos enviados')
      this.route.navigate(['/inicio'])
    })

  }



async presentToast(mensaje: string){
  const toast = await this.toastCtrl.create({
    message: mensaje,
    duration: 2000
  });
  toast.present();
}









  ngOnInit() {

  }

}
