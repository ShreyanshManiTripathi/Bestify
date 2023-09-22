import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { ShowQuizComponent } from './show-quiz/show-quiz.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { SnakeComponent } from './snake/snake.component';
import { BoardComponent } from './tetris/tetris.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { ViewPreScoreComponent } from './view-pre-score/view-pre-score.component';
import { QuizsearchComponent } from './quizsearch/quizsearch.component';
import { AuthModule } from '../auth/auth.module';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/home' },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthModule] },
      {
        path: 'show-quiz',
        component: ShowQuizComponent,
        canActivate: [AuthModule],
      },
      {
        path: 'search-quiz',
        component: QuizsearchComponent,
        canActivate: [AuthModule],
      },
      {
        path: 'show-result',
        component: ShowResultComponent,
        data: { userScore: 'userScore' },
        canActivate: [AuthModule],
      },
      {
        path: 'games',
        component: GamesComponent,
        canActivate: [AuthModule],
      },
      {
        path: 'view-pre-score',
        component: ViewPreScoreComponent,
        data: { userScore: 'userScore' },
        canActivate: [AuthModule],
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        canActivate: [AuthModule],
      },
    ],
  },
  { path: 'snake', component: SnakeComponent, canActivate: [AuthModule] },
  { path: 'tetris', component: BoardComponent, canActivate: [AuthModule] },
  {
    path: 'tic-tac-toe',
    component: TicTacToeComponent,
    canActivate: [AuthModule],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
