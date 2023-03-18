import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizComponent } from './page/create-quiz/create-quiz.component';
import { ListQuizComponent } from './page/list-quiz/list-quiz.component';

const routes: Routes = [
  {path: 'create-quiz', component: CreateQuizComponent},
  {path: 'list-quiz', component: ListQuizComponent},
  {path: '', redirectTo: '/list-quiz', pathMatch: 'full'},
  {path: '**', redirectTo: '/list-quiz'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
