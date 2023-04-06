import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateQuizComponent } from './page/create-update-quiz/create-update-quiz.component';
import { ListQuizComponent } from './page/list-quiz/list-quiz.component';
import { OwnedQuizComponent } from './page/owned-quiz/owned-quiz.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { QuestionComponent } from './page/question/question.component';

const routes: Routes = [
  {path: 'create-quiz', component: CreateUpdateQuizComponent},
  {path: 'edit-quiz', component: CreateUpdateQuizComponent},
  {path: 'list-quiz', component: ListQuizComponent},
  {path: 'manage-quizzes', component: OwnedQuizComponent},
  {path: "welcome", component:WelcomeComponent},
  {path: "question", component:QuestionComponent},
  {path: '', redirectTo: '/list-quiz', pathMatch: 'full'},
  {path: '**', redirectTo: '/list-quiz'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
