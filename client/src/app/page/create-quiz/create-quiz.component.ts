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

    // createQuestion(question: (Question| undefined) = undefined):FormGroup{
    //   return !question || !question.options ? this.fb.group({
    //       prompt: ['', Validators.required],
    //       a: ['', Validators.required],
    //       b: ['', Validators.required],
    //       c: ['', Validators.required],
    //       d: ['', Validators.required],
    //       ans: ['', Validators.required]}) :
    //       this.fb.group({
    //                 prompt: [question?.prompt, Validators.required],
    //                 a: [question?.options[0], Validators.required],
    //                 b: [question?.options[1], Validators.required],
    //                 c: [question?.options[2], Validators.required],
    //                 d: [question?.options[3],  Validators.required],
    //                 ans: ['', Validators.required]
    //             })
    // }
    
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
