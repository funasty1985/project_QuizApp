import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizComponent } from './page/create-quiz/create-quiz.component';
import { ListQuizComponent } from './page/list-quiz/list-quiz.component';
import { OwnedQuizComponent } from './page/owned-quiz/owned-quiz.component';

const routes: Routes = [
  {path: 'create-quiz', component: CreateQuizComponent},
  {path: 'edit-quiz', component: CreateQuizComponent},
  {path: 'list-quiz', component: ListQuizComponent},
  {path: 'manage-quizzes', component: OwnedQuizComponent},
  {path: '', redirectTo: '/list-quiz', pathMatch: 'full'},
  {path: '**', redirectTo: '/list-quiz'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
