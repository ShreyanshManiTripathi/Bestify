import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quizsearch',
  templateUrl: './quizsearch.component.html',
  styleUrls: ['./quizsearch.component.scss']
})
export class QuizsearchComponent implements OnInit {

  ngOnInit(): void {
  }

  searchData: any = []

  loggedUser: any;
  favQuizList: { quizName: string; quizTimer: string; quizId: string }[] = [];
  quizListRes = [];
  constructor(private userService: UserService, private route: Router, private toastr: ToastrService) {

    this.userService.searchQuiz().subscribe(searchQuiz => {
      this.searchData = searchQuiz;
      // console.log(this.searchData)
    });
  }

  searchedKeyword: any;
  getQuiz(quizId: string) {
    this.userService.quiz = quizId;
    this.route.navigate(['user/dashboard/show-quiz']);
  }

  addToFAV(quizId: string) {
    let flag = true;
    this.loggedUser = sessionStorage.getItem('userId');
    this.userService.getFavorites(this.loggedUser).subscribe((response) => {
      this.favQuizList = [];
      this.quizListRes = JSON.parse(JSON.stringify(response));
      var favObj: { quizName: string; quizTimer: string; quizId: string };
      for (var i = 0; i < this.quizListRes.length; i++) {
        favObj = {
          quizName: this.quizListRes[i]['quiz']['quizName'],
          quizTimer: this.quizListRes[i]['quiz']['quizTimer'],
          quizId: this.quizListRes[i]['quizId'],
        };
        this.favQuizList.push(favObj);
      }
      for (let i = 0; i < this.favQuizList.length; i++) {
        if (this.favQuizList[i]['quizId'] == quizId) {
          flag = false;
          break;
        }
        else {
          flag = true;
        }
      }

      if (flag) {
        this.userService.addQuizToFavorites(this.loggedUser, quizId).subscribe(response => {
          this.toastr.success("Added quiz to favorites successfully")
        })
      }
      else {
        this.toastr.warning("Quiz already added to Favorites")
      }


    });

  }
}

