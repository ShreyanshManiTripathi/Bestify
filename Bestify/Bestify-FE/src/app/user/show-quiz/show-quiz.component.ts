import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { ShowquestionService } from './showquestion.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.scss'],
})
export class ShowQuizComponent implements OnInit {
  ngOnInit(): void { }
  questions: any = [];
  quiz: any = [];
  flag = false;
  getAllQuestion() {
    this.flag = true;
  }
  data: {
    quesNo: string;
    ans: string;
  }[] = [];
   quizId: string;
   quizzes:any=[]
  //getting questions from Api
  constructor(private userService: UserService, private route: Router) {
    this.quizId= this.userService.quiz;
    this.userService.getQuestion(this.quizId).subscribe(questions => {
      this.questions = questions;
    });

  
    this.userService.searchQuiz().subscribe(response => {
      this.quizzes=response;
      console.log(response)
      for(let i=0;i<this.quizzes.length;i++){
         if(this.quizId==this.quizzes[i].quizId){
           this.quiz.push(this.quizzes[i]);
           // alert("hello")
         }
      }
  });

  
  }
  radioChangeHandler(quesNo: any, ans: any, num: number) {
    const data1 = {
      quesNo: quesNo,
      ans: ans,
    };

    if (this.data.length > num) {
      this.data[num].ans = ans
    } else {
      this.data.push(data1);
    }

    // console.log(this.data)
  }



  getAnswer() {
    this.userService.questionArray = this.data;
    this.userService.quizID = this.questions.quizId;
    let quizScore=0
    for(let i=0;i<this.data.length;i++)
    {
      if(this.questions[i].quesId==this.data[i].quesNo)
      {
        if(this.questions[i].correctAnswer==this.data[i].ans){
          quizScore++;
        }
      }
    }
    // alert(quizScore)
    this.userService.score=quizScore;

    // this.userService.sendScore(quizScore).subscribe();
  
    this.route.navigate(['user/dashboard/show-result']);
  }

}
