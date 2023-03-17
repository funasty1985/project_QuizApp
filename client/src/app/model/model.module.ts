import { NgModule, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuestionRepository } from './question.repository';
import { StaticDataSource } from './static.datasource';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    QuestionRepository,
    StaticDataSource,
    {provide: StaticDataSource}
  ]
})
export class ModelModule { }
