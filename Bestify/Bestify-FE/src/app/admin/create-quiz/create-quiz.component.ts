import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  //category loaded on initialization
  CategoryList = [];

  //quiz data
  quizName: string = "";
  NoOfQuestion: number = 0;
  timer: number = 0;
  scorePerQuestion: number = 0;
  selectedCategoryId: string = "";
  selectCategoryName: string = "";
  showModal = true;

  constructor(private adminService: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.adminService.getCategory().subscribe(response => {
      this.CategoryList = JSON.parse(JSON.stringify(response));
    })
  }


  refineQuizData() {
    if (this.selectedCategoryId == '') {
      this.showModal = false;
      this.toastr.error("Select Category")
    } else {
      this.showModal = true;
    }
    if (this.quizName == '') {
      this.showModal = false;
      this.toastr.error("Enter Quiz Name")
    } else {
      this.showModal = true;
    }
    if (this.NoOfQuestion <= 0) {
      this.showModal = false;
      this.toastr.error("No of Questions cannot be less than 1")
    }
    else {
      this.showModal = true;
    }

    if (this.scorePerQuestion <= 0) {
      this.showModal = false;
      this.toastr.error("Score per question cannot be less than or equal to 0")
    } else {
      this.showModal = true;
    }

    if (this.timer <= 0) {
      this.showModal = false;
      this.toastr.error("Timer cannot less than or equal to 0")
    } else {
      this.showModal = true;
    }


    for (let i = 0; i < this.CategoryList.length; i++) {
      if (this.selectedCategoryId == this.CategoryList[i]["categoryId"]) {
        this.selectCategoryName = this.CategoryList[i]["categoryName"]
      }
    }
  }

  addQuiz() {


    this.adminService.createQuiz(this.quizName, (this.timer * this.NoOfQuestion), this.NoOfQuestion, (this.scorePerQuestion * this.NoOfQuestion), this.selectedCategoryId)
      .subscribe(response => {
        let createdQuizData = JSON.parse(JSON.stringify(response));
        this.adminService.getCreatedQuizData(createdQuizData)
        this.router.navigate(['/admin/dashboard/create-quest'])

      })
  }
}
