import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BasicAuthenticationService } from "../service/basic-authentication.service";
import { HardcodedAuthenticationService } from "../service/hardcoded-authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "vinay";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(
    private router: Router,
    private HardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin() {
    console.log(this.username);
    //  console.log(this.password);
    // if (this.username == 'in28minutes' && this.password == 'vinay') {
    if (
      this.HardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      // Redirect to the Welcome page
      this.router.navigate(["welcome", this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    console.log(this.username);
    //  console.log(this.password);
    // if (this.username == 'in28minutes' && this.password == 'vinay') {
      this.basicAuthenticationService
        .executeAuthenticationService(this.username, this.password)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
        )
  }

  
}
