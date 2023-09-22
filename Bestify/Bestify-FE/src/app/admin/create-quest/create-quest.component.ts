import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.scss']
})
export class CreateQuestComponent implements OnInit {
  Quizdata = [];
  noOfQuestion: number = 0;
  quizId: string = "abcd";
  numbers: number[] = []


  public question: any[] = [{
    quesStmt: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: '',
    quidId: this.quizId
  }];

  public OptionArray: any[] = [
    { key: "A", value: "Option A" }, { key: "B", value: "Option B" }, { key: "C", value: "Option C" }, { key: "D", value: "Option D" }]

  constructor(private adminService: AdminService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Quizdata = this.adminService.quizData
    this.adminService.quizData = [];
    this.noOfQuestion = parseInt(this.Quizdata[0]["noOfQuestions"]);
    this.quizId = this.Quizdata[0]["quizId"];

    this.addQuestion();
    this.removeQuestion(0);
  }


  addQuestion() {
    this.question.push({
      quesStmt: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: '',
      quizId: this.quizId = this.quizId,
    });
  }

  removeQuestion(i: number) {
    this.question.splice(i, 1);
  }


  createQuestions() {
    if (this.question.length == this.noOfQuestion) {
      this.adminService.createQuestion(this.question)
        .subscribe(response => {
          this.toastr.success("Questions Added Successfully");
          this.router.navigate(["admin"]);
        })
    }
    else {
      this.toastr.warning(`Enter Total  ${this.noOfQuestion} Questions `)
    }
  }
}
