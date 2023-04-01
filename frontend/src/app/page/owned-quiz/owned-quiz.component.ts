import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QuizRepository } from 'src/app/model/quiz.repository';
import { Quiz } from 'src/app/model/quiz.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owned-quiz',
  templateUrl: './owned-quiz.component.html',
  styleUrls: ['./owned-quiz.component.css']
})
export class OwnedQuizComponent {
  displayedColumns: string[] = ['_id','title', 'author','description', "actions"]
  // quizs: Quiz[] = [];

  constructor(
    private repository: QuizRepository,
    private router: Router
  ){
  }

  // ngAfterViewInit(): void {
  //   this.getOwnedQuiz();
  // }

  // getOwnedQuiz(){
  //   this.dataSource.getQuizes("HKer").subscribe((data: any) => {
  //     this.quizs = data;
  //     console.log(this.quizs)
  //   })
  // }

  toEditPage = (quiz: Quiz): void => {
      this.router.navigateByUrl('/edit-quiz', { state: {quiz} })
  }

  get quizs(): Quiz[]
  {
    return this.repository.getOwnedQuiz()
  }
}
