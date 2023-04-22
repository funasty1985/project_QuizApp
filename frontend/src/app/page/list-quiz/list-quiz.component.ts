import { Component } from '@angular/core';
import { QuizRepository } from 'src/app/model/quiz.repository';
import { Quiz } from 'src/app/model/quiz.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent {

  constructor(
    private repository: QuizRepository,
    private router: Router
  ){
    console.log("This is called")
  }

  get quizs(): Quiz[]
  {
    return this.repository.getQuizs()
  }

  toDoQuizPage(quizId : number|undefined, quizTitle: string|undefined){
    this.router.navigateByUrl('/welcome', { state: {quizId, quizTitle} })
  }
}
