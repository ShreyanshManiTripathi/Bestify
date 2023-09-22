import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-pre-score',
  templateUrl: './view-pre-score.component.html',
  styleUrls: ['./view-pre-score.component.scss']
})
export class ViewPreScoreComponent {
  userId: any = "";
  userScore: any;
  quizDetails: any = [];
  gameDetails: any = [];
  quizId: string = "";
  gameId: string = "";
  userQuizList: { "username": string, "userScore": number, "playedOn": string }[] = [];

  constructor(private toaster: ToastrService, private userService: UserService) {
    this.userId = sessionStorage.getItem("userId");
    this.userScore = this.userService.score;
    this.quizId = this.userService.quiz
    console.log(this.quizId)
  }

  showQuizScores() {
    this.userService.getQuizScores(this.userId).subscribe(data => {
      this.quizDetails = JSON.parse(JSON.stringify(data));
      this.quizDetails = data;
        console.log(this.quizDetails);
    })
  }

  showGameScore() {
    this.userService.getGameScore(this.userId).subscribe(data => {
      this.gameDetails = data;
      console.log(this.gameDetails);
    })
  }
  sendMail() {
    this.userService.sendMail(this.userId).subscribe(Response => {
      this.toaster.success("Email sent sucessufully");

    });
  }

}
