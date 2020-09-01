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

  

  constructor(private http: HttpClient) { }

  /*login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }*/


  login(password:string,username:string){
    console.log(username+password)
    return this.http.post(AUTH_API + 'signin',{username:username,password:password},httpOptions)
    
    
    /*
    pipe(
      tap(token => {
        this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );*/
  }

  /*getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }*/

  
}