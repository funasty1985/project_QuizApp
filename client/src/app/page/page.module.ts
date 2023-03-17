import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PartialModule } from '../partial/partial.module';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';



@NgModule({
  declarations: [
    CreateQuizComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PartialModule
  ],
  exports: [
    PartialModule
  ]
})
export class PageModule { }
