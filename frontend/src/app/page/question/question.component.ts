import { Component,OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {


  public name : string="";

  //////////////////////////updated questionlist type
 public questionList: {
  _id: string,
  quizId: string,
  prompt: string,
  options: string[],
  answer: number,
  __v: number
}[] = [];


  ///////////////////////////////

  public currentQuestion : number =0; //************************ */
  public points : number =0; //************************ */
  counter=60; //************************ */
  correctAnswer: number =0;
  inCorrectAnswer: number =0;
  interval$ :any;
  progress: string ="0"; //*********122.31 */
  isQuizCompleted : boolean = false; //********142.15 */
  constructor(private questionService : QuestionService ) {}

    ngOnInit(): void {
      this.name = localStorage.getItem("name")!;
      this.getAllQuestions();
      this.startCounter();

    }
    /////////////////////////////////////// Change this.questionList = res;
    getAllQuestions() {
      this.questionService.getQuestionJson()
        .subscribe(res => {
          this.questionList = res;
          // console.log(this.questionList);
        });
    }

    ////////////////////////////////////
    //**************59.45 */
    nextQuestion(){
      this.currentQuestion++;
  // reset background color of all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
    (option as HTMLElement).style.backgroundColor = '';
    });
    console.log("NextQue is clicked");

    }
    
    //****************59.45 */
    previousQuestion(){
      this.currentQuestion--; 
    }
////////////////////////////////////////////// change answer method codes
    answer(currentQno: number, option: string) {
      if (currentQno === this.questionList.length) {
        this.isQuizCompleted = true;
        this.stopCounter();
      }
      if (option === this.questionList[currentQno-1].options[this.questionList[currentQno-1].answer]) {
        // console.log('Answer is correct');
        this.points += 10;
        this.correctAnswer++;
        setTimeout(() => {
          this.currentQuestion++;
          this.resetCounter();
          this.getProgressPercent();
        }, 1000);
      }
      else {
        setTimeout(() => {
          // console.log('Answer is Incorrect');
          this.currentQuestion++;
          this.inCorrectAnswer++;
          this.resetCounter();
          this.getProgressPercent();
        }, 1000);
      }
    }
////////////////////////////////////////////////////////////////
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      console.log("counter check :: ", this.counter)
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=60;

      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },600000);
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;

  }

  resetCounter(){
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  //**********119.10 */
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress= "0";

  }

  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }

}