import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Igame } from '../user/snake/game1';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = "http://localhost:8080/users/";

  score: number = 0;
  constructor(private httpClient: HttpClient) { }
  quizID: string = '';
  questionArray: any[] = [];
  quiz: any;

  getQuestion(quizId: string) {
    let url = 'http://localhost:8080/users/question/' + quizId;
    return this.httpClient.get(url);
  }

  searchQuiz() {
    let url = 'http://localhost:8080/users/quiz/all';
    return this.httpClient.get(url);
  }

  sendScore(score: any) {
    return this.httpClient.post(this.userUrl + "userscore", score)
  }

  getFavorites(userId: string) {
    return this.httpClient.get(this.userUrl + "favorites/" + userId)
  }

  removeQuiz(quizId: string) {
    return this.httpClient.delete(this.userUrl + "removefromfav/" + quizId)
  }

  getCategory() {

    return this.httpClient.get(this.userUrl + "category");
  }

  getSpecificCategory(categoryId: string) {
    return this.httpClient.get(this.userUrl + "category/" + categoryId);
  }

  getQuizByCategoryId(categoryId: string) {
    return this.httpClient.get(this.userUrl + 'quiz/' + categoryId);
  }

  getAllQuestionByQuizId(quizId: string) {
    return this.httpClient.get(this.userUrl + "quiz/" + quizId);
  }

  private userId: any;
  getScores() {
    let storage = this.parse();
    let id = storage.userId;
    let url = this.userUrl + "viewquizprescore/" + id;
    return this.httpClient.get(url);
  }

  private parse() {
    var ssId = localStorage.getItem(this.userId) as any;
    return JSON.parse(ssId);
  }

  //------------send mail to user
  sendMail(userId: any) {
    return this.httpClient.post(this.userUrl + "sendMail", userId)
  }

  //--------------show quiz score
  getQuizScores(userId: string) {
    return this.httpClient.get(this.userUrl + "viewquizprescore/" + userId);
  }

  //------------ show game score
  getGameScore(userId: string) {
    return this.httpClient.get(this.userUrl + "viewgameprescore/" + userId);
  }

  // fav quiz
  addQuizToFavorites(userId: string, quizId: string) {
    var body = {
      userId: userId,
      quizId: quizId,
      isFav: true
    }
    return this.httpClient.post(this.userUrl + 'addtofav/', body)
  }


}
