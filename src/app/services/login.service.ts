import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { tap } from 'rxjs/operators';

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


  login(password:string,username:string){
    console.log(username+password)
    return this.http.post(AUTH_API + 'signin',{username:username,password:password},httpOptions)
   
  }
  
}