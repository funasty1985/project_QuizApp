import { Component } from '@angular/core';
import { QuizRepository } from 'src/app/model/quiz.repository';
import { Quiz } from 'src/app/model/quiz.model';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent {

  constructor(
    private repository: QuizRepository
  ){
    console.log("This is called")
  }

  get quizs(): Quiz[]
  {
    return this.repository.getQuizs()
  }
}
