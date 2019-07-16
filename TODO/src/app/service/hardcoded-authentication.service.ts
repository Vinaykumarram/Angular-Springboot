import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log(this.isUserLoggedIn());
    if (username == 'vinay' && password == 'vinay') 
    {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }


  isUserLoggedIn() {
                    let user = sessionStorage.getItem('authenticateUser')
                    return !(user === null)
                   }

  logut() {
           sessionStorage.removeItem('authenticateUser')
          }
}