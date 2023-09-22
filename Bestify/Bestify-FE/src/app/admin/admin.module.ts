import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { CreateQuestComponent } from './create-quest/create-quest.component';
import { ListGamesComponent } from './list-games/list-games.component';
import { TopScoresComponent } from './top-scores/top-scores.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateQuizComponent,
    CreateQuestComponent,
    ListGamesComponent,
    TopScoresComponent,
    ListQuizComponent,
    HomeComponent,
    LeaderboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule { }
