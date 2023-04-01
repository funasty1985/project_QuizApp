
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "./question.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { Quiz } from "./quiz.model";

@Injectable()
export class QuizRepository 
{
    private  quizs: Quiz[] = [];
    private  ownedQuizs: Quiz[] = [];
    
    constructor(private dataSource: RestDataSource){
        dataSource.getQuizes().subscribe(data  => {
            this.quizs = data;
        })

        dataSource.getQuizes("HKer").subscribe(data => {
            this.ownedQuizs = data; 
        })
    }

    getQuizs(): Quiz[] {
        return this.quizs
    } 

    getOwnedQuiz(): Quiz[]{
        return this.ownedQuizs
    }
}