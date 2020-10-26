import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,
    private  loginService:LoginService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      const usuarioActual=this.loginService.isLoggedIn;

      if (usuarioActual) {
        // authorised so return true
        return true;
    }
    this.router.navigate(['/inicio']);
    return false;
    
  }
  
}
