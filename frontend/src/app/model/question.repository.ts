import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from "./question.model";
// import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";


@Injectable()
export class QuestionRepository
{
    private questions!: Question[];
    private loaded = false;

    constructor(private dataSource: StaticDataSource)
    {
        dataSource.getQestions().subscribe(data => {
            this.questions = data;
        })
    }

    getQuestions(): Question[] {
        return this.questions
    } 
} 