import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DashboardComponent } from 'src/app/user/dashboard/dashboard.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  //user data
  loginusername: string = "";
  loginpassword: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  confirmpassword = "";
  user: any = []
  constructor(private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  signout() {
    sessionStorage.clear()
  }

  onSignin() {
    if (this.loginusername.length == 0) { this.toastr.warning("Please Enter Username") }
    else if (this.loginpassword.length == 0) { this.toastr.warning("Please Enter Password ") }
    else {
      this.authService.signin(this.loginusername, this.loginpassword)
        .subscribe(response => {
          var resp = JSON.parse(JSON.stringify(response))
          if (resp['verify']) {
            sessionStorage.setItem('userId', resp['data']['userId']);
            sessionStorage.setItem('email', resp['data']['email']);

            if (resp['data']['isAdmin']) {
              this.router.navigate(['admin'])
            }
            else {
              this.router.navigate(['user'])
            }
          }
          else {
            this.toastr.error("Invalid Username or Password ")
          }

        })
    }

  }

  onsignup() {
    if (this.username.length == 0) { this.toastr.warning("Please Enter Username") }
    else if (this.password.length == 0) { this.toastr.warning("Please Enter Password ") }
    else if (this.confirmpassword.length == 0) { this.toastr.warning("Please confirm your Password ") }
    else if (this.email.length == 0) { this.toastr.warning("Please Enter Email") }
    else if (this.password != this.confirmpassword) { this.toastr.error("Password does not match") }
    else if (this.password.length < 4 || this.password.length > 15) { this.toastr.error("Password should be in betweeen 4 to 15 character") }
    else {
      this.authService.signup(this.username, this.email, this.password)
        .subscribe(response => {
          this.toastr.success("Successful Signup, Please Login")

        })

    }

  }
}
