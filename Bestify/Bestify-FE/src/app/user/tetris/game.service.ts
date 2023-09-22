import { Injectable } from '@angular/core';
import { IPiece } from './piece.component';
import { COLS, ROWS, POINTS } from './constants';
import { BoardComponent} from './tetris.component'
import { Observable } from 'rxjs';
import {Tgame } from'./tetgame'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _url: string = "http://localhost:8080/users/gam2";
  private _url1:string ="http://localhost:8080/users/sendTrans";
  private ngxTetris = 'ngx_tetris';

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
   getGameDetails():Observable<Tgame[]>{
     return this.http.get<Tgame[]>(this._url);
 
   }

  public store(score: number) {
    localStorage.setItem(this.ngxTetris, JSON.stringify({ 'best_score': score }));
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
      var  sss = localStorage.getItem(this.ngxTetris) as any;
    return JSON.parse(sss);
  }
  valid(p: IPiece, board: number[][]): boolean {
    return p.shape.every((row:any, dy:any) => {
      return row.every((value:any, dx:any) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          this.isEmpty(value) ||
          (this.insideWalls(x) &&
            this.aboveFloor(y) &&
            this.notOccupied(board, x, y))
        );
      });
    });
  }
   
  isEmpty(value: number): boolean {
    return value === 0;
  }

  insideWalls(x: number): boolean {
    return x >= 0 && x < COLS;
  }

  aboveFloor(y: number): boolean {
    return y <= ROWS;
  }

  notOccupied(board: number[][], x: number, y: number): boolean {
    return board[y] && board[y][x] === 0;
  }

  rotate(piece: IPiece): IPiece {
    let p: IPiece = JSON.parse(JSON.stringify(piece));
    for (let y = 0; y < p.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
      }
    }
    p.shape.forEach(row => row.reverse());
    return p;
  }

  getLinesClearedPoints(lines: number, level: number): number {
    const lineClearPoints =
      lines === 1
        ? POINTS.SINGLE
        : lines === 2
        ? POINTS.DOUBLE
        : lines === 3
        ? POINTS.TRIPLE
        : lines === 4
        ? POINTS.TETRIS
        : 0;

    return (level + 1) * lineClearPoints;
  }
}
