import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  CategoryList = [];
  selectedCategory: string = "";
  getSpecificCategoryData: [] = [];
  quizData: [] = [];
  questionArray: [] = []
  flag = true
  SelectedquizName = ""

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.adminService.getCategory().subscribe(response => {
      this.CategoryList = JSON.parse(JSON.stringify(response));
    })
  }
  GetQuizList() {
    this.flag = true;
    this.questionArray = []
  }

  selectedCategoryArray() {
    this.flag = true
    this.adminService.getSpecificCategory(this.selectedCategory)
      .subscribe(response => {
        this.getSpecificCategoryData = JSON.parse(JSON.stringify(response));
        this.getQuizByCategoryId();
      })
  }

  getQuizByCategoryId() {
    this.questionArray = []
    this.adminService.getQuizByCategoryId(this.selectedCategory)
      .subscribe(response => {
        this.quizData = JSON.parse(JSON.stringify(response));
      })
  }

  getQuesByQuizId(quizId: any) {
    this.flag = false;
    for (let i = 0; i < this.quizData.length; i++) {
      if (quizId == this.quizData[i]["quizId"]) {
        this.SelectedquizName = this.quizData[i]["quizName"]
      }
    }
    this.adminService.getQuestionsByQuizId(quizId).subscribe(response => {
      this.questionArray = JSON.parse(JSON.stringify(response));

    })
  }


}
