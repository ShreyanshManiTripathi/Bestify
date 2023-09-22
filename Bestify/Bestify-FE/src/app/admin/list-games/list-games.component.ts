import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss'],
})
export class ListGamesComponent implements OnInit {
  GameList = [];
  selectedGame: string = '';
  getSpecificGameData: [] = [];
  gameData: [] = [];

  gameName: string = '';

  gameFlag: boolean = false;

  userGameList: {
    username: string;
    userScore: number;
    playedOn: string;
  }[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.adminService.getGames().subscribe((response) => {
      this.GameList = JSON.parse(JSON.stringify(response));
    });
  }

  selectedGameArray() {
    this.userGameList = [];
    this.adminService
      .getSpecificGameTransactions(this.selectedGame)
      .subscribe((response) => {
        var userData: { username: ''; userScore: number; playedOn: string };
        var specificData = JSON.parse(JSON.stringify(response));
        this.gameName = specificData['gameName'];
        var transactions = specificData['usergametransactions'];
        for (var i = 0; i < transactions
          .length; i++) {
          userData = {
            username: transactions[i]['user']['username'],
            userScore: transactions[i]['userScore'],
            playedOn: transactions[i]['isPlayedOn'],
          };
          this.userGameList.push(userData);
        }
        this.gameFlag = true;
      });
  }
}
