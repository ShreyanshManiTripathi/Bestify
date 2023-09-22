import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  quizData: any = [];

  adminUrl = "http://localhost:8080/admin/";

  constructor(private httpClient: HttpClient) { }

  getCreatedQuizData(data: any) {
    this.quizData.push(data);
  }

  getCategory() {

    return this.httpClient.get(this.adminUrl + "category");
  }

  getSpecificCategory(categoryId: string) {
    return this.httpClient.get(this.adminUrl + "category/" + categoryId);
  }

  getQuizByCategoryId(categoryId: string) {
    return this.httpClient.get(this.adminUrl + 'quiz/' + categoryId);
  }

  createQuiz(quizName: string, quizTimer: number, noOfQuestions: number, quizScore: number, categoryId: string) {
    const quizz = {
      quizName: quizName,
      quizTimer: quizTimer,
      noOfQuestions: noOfQuestions,
      quizScore: quizScore,
      categoryId: categoryId
    };

    return this.httpClient.post(this.adminUrl + 'quiz', quizz);
  }

  createQuestion(data: any[]) {
    return this.httpClient.post(this.adminUrl + 'question', data);
  }


  getQuizTopscorers(categoryId: string) {

    return this.httpClient.get(this.adminUrl + 'quiztransactions/' + categoryId);
  }

  getGamesTopscorers() {
    return this.httpClient.get(this.adminUrl + 'gametransactions/');
  }

  getQuizzes() {

    return this.httpClient.get(this.adminUrl + "quiz/all");
  }

  getSpecificQuizTransactions(quizId: string) {
    return this.httpClient.get(this.adminUrl + "quiztransactions/quiz/" + quizId);
  }

  getGames() {

    return this.httpClient.get(this.adminUrl + "gametransactions");
  }

  getSpecificGameTransactions(gameId: string) {
    return this.httpClient.get(this.adminUrl + "gametransactions/game/" + gameId);
  }

  getQuestionsByQuizId(quizId: any) {
    return this.httpClient.get(this.adminUrl + "question/" + quizId)
  }
}
