import { Component, OnInit } from '@angular/core';
import { Gamelogic } from './gamelogic';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
  providers: [Gamelogic]
})
export class TicTacToeComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {
  }
  startGame(): void {
    this.game.gameStart();
    const currentPlayer = 'Current turn: Player: ' + this.game.currentTurn;
    const information = document.querySelector('.current-status');
    information!.innerHTML = currentPlayer;
  }

  async clickSubfield(subfield: any): Promise<void> {
    if (this.game.gameStatus === 1) {
      const start = (new Date).getTime;
      const position = subfield.currentTarget.getAttribute('position');
      const information = document.querySelector('.current-status');
      this.game.setfield(position, this.game.currentTurn);
      const color = this.game.getPlayerColorClass();
      subfield.currentTarget.classList.add(color);

      await this.game.checkGameEndWinner().then((end: boolean) => {
        if (this.game.gameStatus === 0 && end) {
          information!.innerHTML = 'The  winner is player nr.' + this.game.currentTurn;
        }
      });

      await this.game.checkGameEndFull().then((end: boolean) => {
        if (this.game.gameStatus === 0 && end) {
          information!.innerHTML = 'No winner,draw';
        }
      });

      this.game.changePlayer();

      if (this.game.gameStatus === 1) {
        const currentPlayer = 'Current turn: Player: ' + this.game.currentTurn;
        information!.innerHTML = currentPlayer;
      }
    }

  }

}
