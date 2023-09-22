import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.userService.getCategory().subscribe(response => {
      this.CategoryList = JSON.parse(JSON.stringify(response));
    })
  }

  selectedCategoryArray() {
    this.userService.getSpecificCategory(this.selectedCategory)
      .subscribe(response => {
        this.getSpecificCategoryData = JSON.parse(JSON.stringify(response));
        this.getQuizByCategoryId();
      })
  }

  getQuizByCategoryId() {
    this.userService.getQuizByCategoryId(this.selectedCategory)
      .subscribe(response => {
        this.quizData = JSON.parse(JSON.stringify(response));
      })
  }

  playQuiz(quizId: string) {
    this.userService.quiz = quizId;
    this.router.navigate(['/user/dashboard/show-quiz'])
  }

  FavQuiz(quizId: string) {
    this.userService.quiz = quizId;
    // this.router.navigate(['/user/dashboard/show-quiz'])
  }
}

