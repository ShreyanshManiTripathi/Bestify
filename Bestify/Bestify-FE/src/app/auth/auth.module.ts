import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';





@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AuthRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  exports: [SignInComponent]
})
export class AuthModule implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage['email']) {
      return true;
    }
    this.router.navigate(['signin']);
    return false;

  }
}
