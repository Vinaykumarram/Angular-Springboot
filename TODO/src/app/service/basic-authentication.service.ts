import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { API_URL } from "../app.constants";


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticateUser'

@Injectable({
  providedIn: "root",
})
export class BasicAuthenticationService {
  
  constructor(private https: HttpClient) {}


  executeJWTAuthenticationService(username, password) {
    
    return this.https
      .post<any>(`${API_URL}/authenticate`, { username, password})
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);

          return data;
        })
      );
    //console.log("execuete hello world bean service")
  }


  
  executeAuthenticationService(username, password) {
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.https
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);

          return data;
        })
      );
    //console.log("execuete hello world bean service")
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) return sessionStorage.getItem(TOKEN);
  }

  logut() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
