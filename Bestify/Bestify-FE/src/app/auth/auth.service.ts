import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUrl = "http://localhost:8080/users";
  constructor(private httpClient: HttpClient,
    private router: Router
  ) { }
  /*   getUser(){
        return this.httpClient.get(this.userUrl +"users");
    } */
  signin(username: string, password: string) {
    const user = {
      username: username,
      password: password
    }
    return this.httpClient.post(this.userUrl + "/verify", user)
  }



  signup(username: string, email: string, password: string) {
    const user = {
      username: username,
      email: email,
      password: password,
      isAdmin: false
    };
    return this.httpClient.post(this.userUrl + '/', user);
  }

}
