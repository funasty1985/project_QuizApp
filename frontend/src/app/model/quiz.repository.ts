
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
    
    constructor(private dataSource: RestDataSource){
        dataSource.getQuizes().subscribe(data  => {
            this.quizs = data
        })
    }

    getQuizs(): Quiz[] {
        return this.quizs
    } 
}