import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { tap } from 'rxjs/operators';
import { LoginUsuario } from '../models/LoginUsuario';

//const AUTH_API_PRODUC = 'http://localhost:8080/api/auth/';
const AUTH_API = 'https://incidencias-servicio-backend.herokuapp.com/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  token:any;

  

  constructor(private http: HttpClient,private storage:NativeStorage) { }

  /*login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }*/


  login(usuario:LoginUsuario){
   // console.log("paasword"+usuario.password);
    //console.log("Uswrname"+usuario.username);
    
    return this.http.post<any>(AUTH_API + 'signin',{password:usuario.password,username:usuario.username},httpOptions)
    
   
  }
  
}