import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, AbstractControl, FormControl} from '@angular/forms';
import { QuestionRepository } from 'src/app/model/question.repository';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
})
export class CreateQuizComponent implements OnInit{
    public form!: FormGroup;
    public questionsData!: Question[];
    
    constructor(private fb:FormBuilder, private repository: QuestionRepository) 
    {

      this.questionsData = repository.getQuestions();
    }

    ngOnInit(): void {
        this.form = this.fb.group({
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

    onSubmit(){
      console.log(this.form.value);
    }  
    get questions():FormArray{
      return <FormArray> this.form.get('questions');
    }

    getOptions(index: number): FormArray{
      return this.questions.at(index).get("options") as FormArray
    }

    toFormGroup = (form: AbstractControl) => form as FormGroup;
}
