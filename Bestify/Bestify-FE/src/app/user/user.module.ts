import { UsersRoutingModule } from './users-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ViewPreScoreComponent } from './view-pre-score/view-pre-score.component';
import { ShowQuizComponent } from './show-quiz/show-quiz.component';
import { GamesComponent } from './games/games.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http'
import { SnakeComponent } from './snake/snake.component';
import { BestScoreManager } from './snake/storage.service.service';
import { BoardComponent } from './tetris/tetris.component';
import { GameService } from './tetris/game.service';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HomeComponent } from './home/home.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizsearchComponent } from './quizsearch/quizsearch.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FavoritesComponent,
    ViewPreScoreComponent,
    ShowQuizComponent,
    GamesComponent,
    QuizsearchComponent,
    SnakeComponent,
    BoardComponent,
    TicTacToeComponent,
    HomeComponent,
    ShowResultComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BestScoreManager,
    GameService
  ]
})
export class UserModule { }
