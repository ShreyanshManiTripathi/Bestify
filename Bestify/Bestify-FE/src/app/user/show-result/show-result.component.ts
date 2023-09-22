import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss']
})
export class ShowResultComponent implements OnInit {
  userId:any="";
  constructor(private toaster:ToastrService, private userService:UserService, private route:Router) {

   }
  
  //  sendMail(){
  //   this.userId=sessionStorage.getItem("userId");
  //   this.userService.sendMail(this.userId).subscribe(Response=>{
  //     this.toaster.success("Email sent sucessufully");
  //   });
  //  }

  sendScore(){
    // this.userService.score=10;
    this.route.navigate(['user/dashboard/view-pre-score'])
  }

  ngOnInit(): void {
  }

}
