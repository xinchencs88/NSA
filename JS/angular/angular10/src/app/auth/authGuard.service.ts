import { Injectable } from '@angular/core';

//关键在于canActivate是路由守卫的核心功能
import { CanActivate,Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor (
        
        public route : Router,
      ) { }
  canActivate(){
    const cs = window.sessionStorage.getItem('auth');
    if(!cs){
       this.route.navigate(["/log/"]);
     
    }
    return true;

  }
}
