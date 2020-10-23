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
      for_dateInicio: this.dateInicio, 
      for_dateTermino: this.dataTermino,
      for_descripcion: this.descripcion,
      for_latitud: this.latitud,
      for_longitud: this.longitud,
      for_nivelRiesgo: this.nivelRiesgo,
      for_publico: this.publico,
      for_tipoAlarma: this.tipoAlarma,
      for_tipoIncidencia: this.tipoIncidencia,
      for_titulo: this.titulo
      
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
