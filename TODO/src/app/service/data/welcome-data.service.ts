import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';


export class HelloWorldBean {
  constructor(public message: string,public name:string) { }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    //console.log("execuete hello world bean service")
  }

  executeHelloWorldServiceWithPathVariable(name) {
    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();


    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`,
    // {headers}
    );
    //console.log("execuete hello world bean service")
  }

  //  createBasicAuthenticationHttpHeader() {
  //   let username = 'vinay'
  //   let password = 'vinay'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
