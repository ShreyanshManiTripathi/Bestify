import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igame } from './game1';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BestScoreManager {
  
  private ngxSnake = 'ngx_snake';
  private _url: string = "http://localhost:8080/users/gam";
  private _url1:string ="http://localhost:8080/users/sendTrans";


  constructor(private http:HttpClient){
 
  }

  getGameTransaction(userScore:number,status:boolean,userId:string,gameId:string){
   var body={
       userScore:userScore,
       status:status,
       userId:userId,
       gameId:gameId

   }
   console.log("boom boom");
   return this.http.post(this._url1,body);
  }
  getGameDetails():Observable<Igame[]>{
    return this.http.get<Igame[]>(this._url);

  }
  public store(score: number) {
    localStorage.setItem(this.ngxSnake, JSON.stringify({ 'best_score': score }));
  }
  
  public retrieve() {
    let storage = this.parse();
    if (!storage) {
      this.store(0);
      storage = this.parse();
    }

    return storage.best_score;
  }

  private parse() {
      var  sss = localStorage.getItem(this.ngxSnake) as any;
    return JSON.parse(sss);
  }
}
