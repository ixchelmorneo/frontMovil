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
//https://incidencias-servicio-backend.herokuapp.com/api/incidencia
 enviarFormulario(datosFormulario){
/*
  const httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpeGNoZWwiLCJpYXQiOjE2MDM1MDYxNjEsImV4cCI6MTgwNTA0NjE2Mn0.e7OqU0-83b7PlxbvywurLJdEM5Nge0W7IEUq2Eye5ZTokpvT30GKuEvuriOps7a2Ln7IwRtm5dn1p8BAhp47BPfTKHjEHzd9pt06Fk7QlTCFKLHdLTk3nxiRqstK2Xvg5K812C49nMgooDmqcmj5bcMyLWHRGCsPh9o95jDQ-Tdu4uoPfTakGABWzI3SRY9Y4C691iOp0ThOBtN_rniRsrYISHGHZAc6NRYtdRmY78LwDGDFPylDXlmlp5KzcgJedm_-Lzwttb8d0VeZELlnTU8VYeW7BWtJpQK-Yxml9vk9WZMxQ4lka-kuwNirnA0hjfX2JlGltSZGn_TNaqKxrg'
    })
  };
*/
   return this.http.post(environment.url + 'incidencia', datosFormulario, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJpeGNoZWwiLCJpYXQiOjE2MDM1MDYxNjEsImV4cCI6MTgwNTA0NjE2Mn0.e7OqU0-83b7PlxbvywurLJdEM5Nge0W7IEUq2Eye5ZTokpvT30GKuEvuriOps7a2Ln7IwRtm5dn1p8BAhp47BPfTKHjEHzd9pt06Fk7QlTCFKLHdLTk3nxiRqstK2Xvg5K812C49nMgooDmqcmj5bcMyLWHRGCsPh9o95jDQ-Tdu4uoPfTakGABWzI3SRY9Y4C691iOp0ThOBtN_rniRsrYISHGHZAc6NRYtdRmY78LwDGDFPylDXlmlp5KzcgJedm_-Lzwttb8d0VeZELlnTU8VYeW7BWtJpQK-Yxml9vk9WZMxQ4lka-kuwNirnA0hjfX2JlGltSZGn_TNaqKxrg')}   );

   

 }


}



