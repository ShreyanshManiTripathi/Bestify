import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-top-scores',
  templateUrl: './top-scores.component.html',
  styleUrls: ['./top-scores.component.scss']
})
export class TopScoresComponent implements OnInit {

  topScoreQuizzesL = [];
  topScoreGamesL = [];

  selectedCategoryId: string = "";
  selectCategoryName: string = "";

  topScoresUserQuizList: { "quizName": string, "username": string, "userScore": number }[] = [];
  topScoresUserGameList: { "gameName": string, "username": string, "userScore": number }[] = [];


  flag: boolean = false;
  gameFlag: boolean = false;
  CategoryList = [];
  constructor(private adminService: AdminService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getCategory();
  }


  getCategory() {
    this.adminService.getCategory().subscribe(response => {
      this.CategoryList = JSON.parse(JSON.stringify(response));
    })
  }

  topScorerQuizzes() {
    this.gameFlag = false;
    this.topScoresUserQuizList = []
    this.adminService.getQuizTopscorers(this.selectedCategoryId).subscribe(response => {
      this.topScoreQuizzesL = JSON.parse(JSON.stringify(response));
      for (var i = 0; i < this.topScoreQuizzesL.length; i++) {
        var topScorerOfQuiz: { "quizName": string, "username": string, "userScore": number }
        let quiz_data_transactions: any = [];
        quiz_data_transactions = this.topScoreQuizzesL[i]["userquiztransactions"];
        var topScorerUser = { "userScore": 0, "username": '' }
        for (var j = 0; j < quiz_data_transactions.length; j++) {
          if (topScorerUser["userScore"] == 0) {
            topScorerUser['userScore'] = quiz_data_transactions[j]["userScore"];
            topScorerUser["username"] = quiz_data_transactions[j]["user"]["username"];
          }
          else if (topScorerUser["userScore"] < quiz_data_transactions[j]["userScore"]) {
            topScorerUser['userScore'] = quiz_data_transactions[j]["userScore"];
            topScorerUser["username"] = quiz_data_transactions[j]["user"]["username"];
          }
        }
        topScorerOfQuiz = { "quizName": this.topScoreQuizzesL[i]["quizName"], "username": topScorerUser['username'], "userScore": topScorerUser['userScore'] };
        this.topScoresUserQuizList.push(topScorerOfQuiz)
      }
      if (this.topScoresUserQuizList.length > 0) {
        this.flag = true;
      }
      else {
        this.flag = false
        this.toastr.warning("No Top Scorer For The Day In Quiz")
      }
    })

    if (this.selectedCategoryId != '') {
      this.flag = true
    }
    else {
      this.toastr.warning("Select Category")
    }
  }

  topScorerGames() {

    this.flag = false;
    this.topScoresUserGameList = []

    this.adminService.getGamesTopscorers().subscribe(response => {
      this.topScoreGamesL = JSON.parse(JSON.stringify(response));
      for (var i = 0; i < this.topScoreGamesL.length; i++) {
        var topScorerOfQuiz: { "gameName": string, "username": string, "userScore": number }
        let game_data_transactions: any = [];
        game_data_transactions = this.topScoreGamesL[i]["usergametransactions"];
        var topScorerUser = { "userScore": 0, "username": '' }
        for (var j = 0; j < game_data_transactions.length; j++) {
          if (topScorerUser["userScore"] == 0) {
            topScorerUser['userScore'] = game_data_transactions[j]["userScore"];
            topScorerUser["username"] = game_data_transactions[j]["user"]["username"];
          }
          else if (topScorerUser["userScore"] < game_data_transactions[j]["userScore"]) {
            topScorerUser['userScore'] = game_data_transactions[j]["userScore"];
            topScorerUser["username"] = game_data_transactions[j]["user"]["username"];
          }

        }
        topScorerOfQuiz = { "gameName": this.topScoreGamesL[i]["gameName"], "username": topScorerUser['username'], "userScore": topScorerUser['userScore'] };
        this.topScoresUserGameList.push(topScorerOfQuiz)
      }
      if (this.topScoresUserGameList.length > 0) {
        this.gameFlag = true;
      }
      else {
        this.gameFlag = false
        this.toastr.warning("No Top Scorer For The Day In Games")
      }

      // this.gameFlag = true;

    })


  }

}



