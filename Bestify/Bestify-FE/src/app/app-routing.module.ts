import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {ShowQuizComponent} from './user/show-quiz/show-quiz.component'

import { SnakeComponent } from './user/snake/snake.component';
import { BoardComponent } from './user/tetris/tetris.component';
import { GamesComponent } from './user/games/games.component';
import { TicTacToeComponent } from './user/tic-tac-toe/tic-tac-toe.component';

import { ViewPreScoreComponent } from './user/view-pre-score/view-pre-score.component';
const routes: Routes = [

  { path: "", component: LandingPageComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'signin' },

  { path: 'signin', component: SignInComponent },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  // {
  //   path:'showquiz',
  //   component:ShowQuizComponent,
  //   loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }













