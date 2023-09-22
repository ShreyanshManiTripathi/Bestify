import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  private ngxSnake = 'snake';
  public id:String;
  constructor() { 
    this.id = '028f08c0-d407-11eb-87c1-7954a7e46bdd';
  }

  ngOnInit(): void {
  }

  setGameId():void{
    localStorage.setItem(this.ngxSnake, JSON.stringify( this.id));
  }
}
