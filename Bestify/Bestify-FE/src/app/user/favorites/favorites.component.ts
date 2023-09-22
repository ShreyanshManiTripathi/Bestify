import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AdminService } from 'src/app/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: string = '';
  loggedUser: any;

  favFlag: boolean = false;
  constructor(private userService: UserService, private adminService: AdminService, private toastr: ToastrService) { }

  favQuizList: { quizName: string; quizTimer: string; quizId: string }[] = [];
  quizListRes = [];
  ngOnInit(): void {
    this.getQuizzes();

    this.getFavorites();
  }

  getFavorites() {
    this.favorites = 'starated with ng on init';
    this.loggedUser = sessionStorage.getItem("userId");
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

      if (this.quizListRes.length == 0) {
        this.toastr.warning("No favorite quizzes");
        this.favFlag = false
      } else {
        this.favFlag = true;
      }

    });

  }

  removeQuiz(quizId: string) {
    this.userService.removeQuiz(quizId).subscribe((response) => {
      this.getFavorites();
    });
  }

  QuizList = [];
  selectedQuiz: string = "";
  getSpecificQuizData: [] = [];
  quizData: [] = [];
  favQuizId = "";

  quizName: string = "";
  quizFlag: boolean = false;

  userQuizList: { "username": string, "userScore": number, "playedOn": string }[] = [];


  // currentUserId="";


  getQuizzes() {
    this.adminService.getQuizzes().subscribe(response => {
      this.QuizList = JSON.parse(JSON.stringify(response));
    })
  }

  selectedQuizArray() {
    this.userQuizList = [];
    this.adminService.getSpecificQuizTransactions(this.selectedQuiz)
      .subscribe(response => {
        var quiz = JSON.parse(JSON.stringify(response));
        this.favQuizId = quiz["quizId"];
      })
  }


  addQuizToFavorites() {
    let flag = true;
    for (let i = 0; i < this.favQuizList.length; i++) {
      if (this.favQuizList[i]['quizId'] == this.selectedQuiz) {
        flag = false;
        break;
      }
      else {
        flag = true;
      }
    }


    if (flag) {
      this.userService.addQuizToFavorites(this.loggedUser, this.favQuizId).subscribe(response => {
        this.getFavorites();
      })
    }
    else {
      this.toastr.warning("Quiz already added to Favorites")
    }


  }



}
