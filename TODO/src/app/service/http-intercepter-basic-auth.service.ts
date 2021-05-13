import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
   let username= 'vinay'
   let password= 'vinay'
   let basicAuthHeadString = 'Basic' +window.btoa(username + ':' + password);

   request = request.clone({
     setHeaders:{
       Authorization: basicAuthHeadString
     }
   })
   return next.handle(request);
  }



}