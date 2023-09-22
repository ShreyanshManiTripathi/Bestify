import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';


@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss']
})
export class ListQuizComponent implements OnInit {
  QuizList = [];
  selectedQuiz: string = "";
  getSpecificQuizData: [] = [];
  quizData: [] = [];

  quizName: string = "";

  quizFlag: boolean = false;

  userQuizList: { "username": string, "userScore": number, "playedOn": string }[] = [];


  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getQuizzes();
  }

  getQuizzes() {
    this.adminService.getQuizzes().subscribe(response => {
      this.QuizList = JSON.parse(JSON.stringify(response));
    })
  }

  selectedQuizArray() {
    this.userQuizList = [];
    this.adminService.getSpecificQuizTransactions(this.selectedQuiz)
      .subscribe(response => {
        var userData: { "username": '', "userScore": number, "playedOn": string }
        var specificData = JSON.parse(JSON.stringify(response));
        this.quizName = specificData["quizName"];
        var transactions = specificData["userquiztransactions"];
        for (var i = 0; i < transactions.length; i++) {
          userData = { "username": transactions[i]["user"]["username"], "userScore": transactions[i]["userScore"], "playedOn": transactions[i]["isPlayedOn"] }
          this.userQuizList.push(userData);
        }
        this.quizFlag = true;


      })
  }

}
