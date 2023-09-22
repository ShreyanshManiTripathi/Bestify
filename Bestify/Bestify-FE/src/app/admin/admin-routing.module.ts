import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestComponent } from './create-quest/create-quest.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ListGamesComponent } from './list-games/list-games.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { TopScoresComponent } from './top-scores/top-scores.component';
import { AuthModule } from '../auth/auth.module';

const routes: Routes = [
  { path: "", redirectTo: "dashboard/home" },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthModule],
    children: [
      { path: "home", component: HomeComponent, },
      { path: "create-quiz", component: CreateQuizComponent },
      { path: "create-quest", component: CreateQuestComponent, },
      { path: "top-scorer", component: TopScoresComponent, },
      {
        path: "leaderboard", component: LeaderboardComponent,
        children:
          [
            { path: "list-quiz", component: ListQuizComponent, canActivate: [AuthModule] },
            { path: "list-games", component: ListGamesComponent, canActivate: [AuthModule] }
          ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
