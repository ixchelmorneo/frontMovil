import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  // token = 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJ0aW5leiIsImlhdCI6MTYwMDgzODExMSwiZXhwIjoxODAyMzc4MTExfQ.a_4JdJ5tSMa4eHz2sBNAI1GRIxxO2EKABg2wHxjcNsojI9dl3PY2tyXOre6gPBnv3heV7hiU4VvpHVmIPOuhIEIRXPSXecapt2YDnxzErVCqPk5b08PL6UWSPv2pSpj6NmyccjNOd4a7WDpcQcaLEN3zgmv5FQgLa_8Vboc1aV-ZXtHs7IUonxZN4vSfDj4gSLrSLFEA2ATmrm_Er-vwhQaXkZO_yZWawif26V2fTgLsHCQs760KY69jfKxtCSuYkCD6s6-__C0lcHpDqHkI7kjRwL8pzWtWs-ZSW9PbCukWGyHzixuLbWh96uWMDlsXCFaFlf2NQFxUGvOCarLoZQ';
/*
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtYXJ0aW5leiIsImlhdCI6MTYwMDgzODExMSwiZXhwIjoxODAyMzc4MTExfQ.a_4JdJ5tSMa4eHz2sBNAI1GRIxxO2EKABg2wHxjcNsojI9dl3PY2tyXOre6gPBnv3heV7hiU4VvpHVmIPOuhIEIRXPSXecapt2YDnxzErVCqPk5b08PL6UWSPv2pSpj6NmyccjNOd4a7WDpcQcaLEN3zgmv5FQgLa_8Vboc1aV-ZXtHs7IUonxZN4vSfDj4gSLrSLFEA2ATmrm_Er-vwhQaXkZO_yZWawif26V2fTgLsHCQs760KY69jfKxtCSuYkCD6s6-__C0lcHpDqHkI7kjRwL8pzWtWs-ZSW9PbCukWGyHzixuLbWh96uWMDlsXCFaFlf2NQFxUGvOCarLoZQ' })
  };
*/
//header = new Headers();

 


//header.append('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }



 //Enviar Formulario NECESITO LA URL  (o declarar una variable asignarla y pegarl adirectamente )
//https://incidencias-servicio-backend.herokuapp.com/api/  <- incidencia
 enviarFormulario(datosFormulario){

  const httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpeGNoZWwiLCJpYXQiOjE2MDMyMzg5NjQsImV4cCI6MTgwNDc3ODk2NH0.C3H9ZltKroDTL3yGpcsesGb5EGZD-z_gM5QZKXmm6kjIWgoOf2dMoSHVSG2ON8DZ26t5M1QZZ20Lm5XPEaqb1WUrHTAYN0gxvXiXbt9qfzBSGlj-CGZIpWeiJon-IAFbLd99a9k2XR-2xuD8YWbw8WeNZG-z-YMb1CGw3R_53-NPXjxCtRCLjlx8nPwajOeH4aOGfL-xgAxmoJwsEIzZv6Pvp0XXBIJe2j-lgbGo4XLZkA0Ba9YagpDK3bqMUUUZD_S_aASNhxtHm0IZPyg75OUNdDkDQypNkePEbX4rPMwdd-XGtqCXPRthvw56chz4-Cm-uGMBQ-EcvMaiFxCOcg'
    })
  };

   return this.http.post(environment.url + 'incidencia', datosFormulario,  httpOptions );
 }


}



