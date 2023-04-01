import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, AbstractControl, FormControl} from '@angular/forms';
import { QuestionRepository } from 'src/app/model/question.repository';
import { Question } from 'src/app/model/question.model';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { NgForm } from '@angular/forms';
import { Quiz } from 'src/app/model/quiz.model';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
})
export class CreateQuizComponent{
    public questionForm!: FormGroup;
    public questionsData: Question[] = [];
    public isQuizCreated = false;
    public quiz: Quiz = new Quiz(undefined,undefined,undefined,undefined);
    
    constructor(private fb:FormBuilder, private repository: QuestionRepository, private dateSource: RestDataSource) 
    {
      const state = window.history.state;
      if(state.quiz){
        this.getQuestionsByQuizId(state.quiz._id);
        this.quiz = state.quiz;
        this.isQuizCreated = true
      }
      else {
        this.initForm();    
      }
    }
    
    getQuestionsByQuizId(quizId?: string){
      this.dateSource.getQuestionsByQuizId(quizId).subscribe(data => {
        this.questionsData = data;
        this.initForm();
      });
    }

    initForm(){
        this.questionForm = this.fb.group({
            questions: this.fb.array(this.questionsData.map(question => this.createQuestion(question)))
        });
    }
    
    createQuestion(question: (Question| undefined) = undefined):FormGroup{
      return !question || !question.options ? this.fb.group({
          prompt: ['', Validators.required],
          options: this.fb.array(["", "", "", ""]),
          answer: ['', Validators.required]}) :
          this.fb.group({
                    prompt: [question?.prompt, Validators.required],
                    // options: [this.fb.array(question.options)],
                    options: this.fb.array(question?.options),
                    answer: [question.answer, Validators.required]
                })
    }

    addQuestion() {
      this.questions.push(this.createQuestion());
    }

    deleteLesson(index: number) {
        this.questions.removeAt(index);
    }

    onSubmitQuestions(){
      console.log(this.questionForm.value);
    } 

    onSubmitQuizInfo(quizInfoForm: NgForm){
      console.log(this.quiz); 
      this.isQuizCreated = true;
    }

    get questions():FormArray{
      return <FormArray> this.questionForm.get('questions');
    }

    getOptions(index: number): FormArray{
      return this.questions.at(index).get("options") as FormArray
    }

    toFormGroup = (form: AbstractControl) => form as FormGroup;
}
